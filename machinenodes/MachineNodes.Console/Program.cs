using Grpc.Net.Client;
using Microsoft.Extensions.Configuration;
using System;
using System.IO;

namespace MachineNodes.Console
{
    class Program
    {
        static void Main(string[] args)
        {
            var config = new ConfigurationBuilder()
                   .AddJsonFile(Path.Combine(Environment.CurrentDirectory, "appsettings.json"))
                   .AddCommandLine(args)
                   .Build();

            var connection = GrpcChannel.ForAddress(config["address"]);

        }
    }
}
