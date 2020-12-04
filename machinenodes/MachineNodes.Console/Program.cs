using Grpc.Core;
using Grpc.Net.Client;
using MachineNodes.Console.Service;
using Microsoft.Extensions.Configuration;
using System;
using System.Device.Gpio;
using System.Device.Pwm;
using System.IO;


// Configuration stuff
var config = new ConfigurationBuilder()
        .AddJsonFile(Path.Combine(Environment.CurrentDirectory, "appsettings.json"), true)
        .AddCommandLine(args)
        .Build();
var lampBinding = config.GetSection(ConfigProperties.LampBindings).Get<LampOptions>();

// Bootstrapping LEDs
var pwmRed =PwmChannel.Create(0, lampBinding.Red, dutyCyclePercentage: 1);
pwmRed.Start();
var pwmGreen = PwmChannel.Create(0, lampBinding.Green, dutyCyclePercentage: 1);
pwmGreen.Start();
var pwmBlue  = PwmChannel.Create(0, lampBinding.Blue, dutyCyclePercentage: 1);
pwmBlue.Start();

//Bootstrapping gRPC Connection
var connection = GrpcChannel.ForAddress(config[ConfigProperties.Address]);
var client = new LightControlService.LightControlServiceClient(connection);

//Establish service Connection
var connectionResult = await client.ConnectAsync(new() { ClientName = config[ConfigProperties.ClientName] });
if (!connectionResult.Accepted)
{
    Console.WriteLine(connectionResult.Message);
    return;
}

//Waiting for light Updates
var lightUpdateResult = client.GetLightUpdates(new());
await foreach (var lightUpdate in lightUpdateResult.ResponseStream.ReadAllAsync())
{
    //pwmRed.Frequency
}

record LampOptions(int Red, int Green, int Blue);


static class ConfigProperties
{
    public const string Address = nameof(Address);
    public const string ClientName = nameof(ClientName);
    public const string LampBindings = nameof(LampBindings);

}