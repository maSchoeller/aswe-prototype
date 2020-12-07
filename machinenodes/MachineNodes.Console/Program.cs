using Grpc.Core;
using Grpc.Net.Client;
using MachineNodes.Console.Service;
using Microsoft.Extensions.Configuration;
using System;
using System.Device.Gpio;
using System.Device.Pwm.Drivers;
using System.IO;
using System.Net.Http;

Console.WriteLine("Service is starting");
// Configuration stuff
var config = new ConfigurationBuilder()
        .AddJsonFile(Path.Combine(Environment.CurrentDirectory, "appsettings.json"), true)
        .AddCommandLine(args)
        .Build();
var lampBinding = config.GetSection(ConfigProperties.LampBindings).Get<LampOptions>();


// Bootstrapping LEDs
// GpioController gpioController = new();
// SoftwarePwmChannel pwmRed =  new(lampBinding.Red, 400, dutyCycle: 1,controller: gpioController);
// pwmRed.Start();
// SoftwarePwmChannel pwmGreen = new(lampBinding.Green, 400, dutyCycle: 1, controller: gpioController);
// pwmGreen.Start();
// SoftwarePwmChannel pwmBlue = new(lampBinding.Blue, 400, dutyCycle: 1, controller: gpioController);
// pwmBlue.Start();

var httpHandler = new HttpClientHandler();
// Return true to allow certificates that are untrusted/invalid
httpHandler.ServerCertificateCustomValidationCallback = HttpClientHandler.DangerousAcceptAnyServerCertificateValidator;

//Bootstrapping gRPC Connection
var connection = GrpcChannel.ForAddress(config[ConfigProperties.Address], new GrpcChannelOptions
{
    HttpHandler = httpHandler
});
var client = new LightControlService.LightControlServiceClient(connection);


Console.WriteLine("Service is started");
//Waiting for light Updates
var lightUpdateResult = client.GetLightUpdates(new ConnectionParameters { ClientName = config[ConfigProperties.ClientName] });
await foreach (var lightUpdate in lightUpdateResult.ResponseStream.ReadAllAsync())
{
    Console.WriteLine($"Color Update: rgb({lightUpdate.Red}, {lightUpdate.Green}, {lightUpdate.Blue})");
    // pwmRed.DutyCycle = lightUpdate.Red / 255;
    // pwmGreen.DutyCycle = lightUpdate.Green / 255;
    // pwmBlue.DutyCycle = lightUpdate.Blue / 255;
}

Console.WriteLine("Service finished");

public class LampOptions {
    public int Red { get; set; }
    public int Green { get; set; }
    public int Blue { get; set; }
}
static class ConfigProperties
{
    public const string Address = nameof(Address);
    public const string ClientName = nameof(ClientName);
    public const string LampBindings = nameof(LampBindings);
}
