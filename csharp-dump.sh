#!/bin/sh

export DOTNET_SDK_VERSION=3.0.100
wget -O dotnet.tar.gz https://dotnetcli.blob.core.windows.net/dotnet/Sdk/$DOTNET_SDK_VERSION/dotnet-sdk-$DOTNET_SDK_VERSION-linux-musl-x64.tar.gz

mkdir -p /usr/share/dotnet 
tar -C /usr/share/dotnet -xzf dotnet.tar.gz 
rm -f /usr/bin/dotnet 
ln -s /usr/share/dotnet/dotnet /usr/bin/dotnet 
rm dotnet.tar.gz

dotnet tool install --global dotnet-dump
export PATH=$PATH:$HOME/.dotnet/tools

dotnet-dump collect --process-id 1
