using Grpc.Core;
using Grpc.Net.Client;
using MachineNodes.Console.Service;
using Microsoft.Extensions.Configuration;
using System;
using System.Device.Gpio;
using System.Device.Pwm.Drivers;
using System.IO;


Console.WriteLine("Service is starting");
// Configuration stuff
var config = new ConfigurationBuilder()
        .AddJsonFile(Path.Combine(Environment.CurrentDirectory, "appsettings.json"), true)
        .AddCommandLine(args)
        .Build();
var lampBinding = config.GetSection(ConfigProperties.LampBindings).Get<LampOptions>();


// Bootstrapping LEDs
GpioController gpioController = new();
SoftwarePwmChannel pwmRed =  new(lampBinding.Red, 400, dutyCycle: 1,controller: gpioController);
pwmRed.Start();
SoftwarePwmChannel pwmGreen = new(lampBinding.Green, 400, dutyCycle: 1, controller: gpioController);
pwmGreen.Start();
SoftwarePwmChannel pwmBlue = new(lampBinding.Blue, 400, dutyCycle: 1, controller: gpioController);
pwmBlue.Start();

//Bootstrapping gRPC Connection
var connection = GrpcChannel.ForAddress(config[ConfigProperties.Address]);
var client = new LightControlService.LightControlServiceClient(connection);

//Establish service Connection
var connectionResult = await client.ConnectAsync(new() { ClientName = config[ConfigProperties.ClientName] });
if (!connectionResult.Accepted)
{
    Console.WriteLine(connectionResult.Message);
    Console.WriteLine("Service is stopped");
    return;
}

Console.WriteLine("Service is started");
//Waiting for light Updates
var lightUpdateResult = client.GetLightUpdates(new());
await foreach (var lightUpdate in lightUpdateResult.ResponseStream.ReadAllAsync())
{
    pwmRed.DutyCycle = lightUpdate.Red / 255;
    pwmGreen.DutyCycle = lightUpdate.Green / 255;
    pwmBlue.DutyCycle = lightUpdate.Blue / 255;
}

Console.WriteLine("Service finished");

record LampOptions(int Red, int Green, int Blue);
static class ConfigProperties
{
    public const string Address = nameof(Address);
    public const string ClientName = nameof(ClientName);
    public const string LampBindings = nameof(LampBindings);

}