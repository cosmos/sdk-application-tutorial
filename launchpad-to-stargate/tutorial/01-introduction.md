---
order: 1
---

# Migrating from v0.39 to v0.40+ using Starport

This tutorial will present a guide on how to migrate your Cosmos SDK application from v0.39 to v0.40+ "Stargate". The v0.40+ release comes with many features and enhancements, such as IBC, efficiency gains, protobuf support, and more.

## Requirements

We will be using Starport to assist us with the migration.

Install it by entering:

```bash
curl https://get.starport.network/starport@v0.13.1! | bash
```

We will be migrating the Proof of File existence tutorial from v0.39 to v0.40+ Stargate. At the time of writing, the version you migrate from is `v0.39.1` and Stargate is `v0.40.0` of the Cosmos SDK.

In order to obtain the code for the Proof of File Existence application, you can follow the tutorial [here](https://tutorials.cosmos.network/proof-of-file-existence/tutorial/01-intro.html), or clone [this](https://github.com/cosmos/sdk-tutorials/tree/master/proof-of-file-existence/pofe) repository.

## Resources

Throughout this guide, we will be regularly referencing this [document](https://docs.cosmos.network/master/migrations/app_and_modules.html), as it contains crucial information about how to migrate a module and application from v0.39 to v0.40+ Stargate.

As the design of Cosmos SDK application is meant to be modular and composable, it is possible to migrate an application from v0.39 to v0.40+ by copying the modules over to a boiler Stargate application and updating a few of the commands mentioned in the migration docs. We will be using Starport to assist with scaffolding new files which will be used as a baseline for migrating your application logic.

## Boilerplate application

Place the v0.39 PoFe application in a `launchpad` directory and next to it a `stargate` directory. We will aim at moving the logic from one application to the other and have your blockchain Stargate ready by the end of the tutorial.

The directory structure should look like this:

```sh
.
├── launchpad # launchpad application directory
│   └── pofe 
│       ├── app
│       │   ...
└── stargate # stargate application directory

```

Once you have your application ready, we will be using Starport to assist us with the migration to Stargate.

Start off by scaffolding your application using the following command.

```sh
starport app github.com/user/pofe
```

Once this is done, you should have a folder called `pofe` with your boilerplate Stargate application.

## Directory Structure

By taking a look at the directory structure, you can determine that there have been a few changes in the overall directory structure.

```sh
pofe
├── app
│   ├── app.go
│   ├── +++ encoding.go
│   ├── export.go
│   ├── +++ genesis.go
│   ├── +++ params
│   │   ├── +++ encoding.go
│   │   └── +++ proto.go
│   ├── prefix.go
│   └── +++ types.go
├── cmd
│   ├── # pofecli
│   │   └── # main.go
│   └── pofed
│       ├── cmd
│       │   ├── app.go
│       │   ├── genaccounts.go
│       │   └── root.go
│       └── main.go
├── config.yml
├── go.mod
├── go.sum
├── +++ internal
│   └── tools
│       └── tools.go
├── +++ proto
│   ├── cosmos
│   │   └── base
│   │       └── query
│   │           └── v1beta1
│   │               └── pagination.proto
│   └── pofe
│       ├── genesis.proto
│       └── query.proto
├── readme.md
├── +++ scripts
│   └── protocgen
├── +++ third_party
│   └── proto
│       ├── confio
│       │   └── proofs.proto
│       ├── cosmos_proto
│       │   └── cosmos.proto
│       ├── gogoproto
│       │   └── gogo.proto
│       ├── google
│       │   ├── api
│       │   │   ├── annotations.proto
│       │   │   ├── http.proto
│       │   │   └── httpbody.proto
│       │   └── protobuf
│       │       ├── any.proto
│       │       └── descriptor.proto
│       └── tendermint
│           ├── abci
│           │   └── types.proto
│           ├── crypto
│           │   ├── keys.proto
│           │   └── proof.proto
│           ├── libs
│           │   └── bits
│           │       └── types.proto
│           ├── types
│           │   ├── evidence.proto
│           │   ├── params.proto
│           │   ├── types.proto
│           │   └── validator.proto
│           └── version
│               └── types.proto
└── x
    └── pofe
        ├── # abci.go
        ├── client
        │   ├── cli
        │   │   ├── query.go
        │   │   └── tx.go
        │   └── rest
        │       └── rest.go
        ├── genesis.go
        ├── handler.go
        ├── keeper
        │   ├── +++ grpc_query.go
        │   ├── # params.go        
        │   ├── keeper.go
        │   └── query.go
        ├── module.go
        └── types
            ├── codec.go
            ├── errors.go
            ├── # events.go
            ├── # expected_keepers.go
            ├── genesis.go
            ├── +++ genesis.pb.go
            ├── # key.go
            ├── keys.go
            ├── # params.go
            ├── # querier.go
            ├── +++ query.go
            ├── +++ query.pb.go
            └── types.go
```

The first key change in the application is that `pofecli` no longer exists, and all of its functionality has been consolidated into `pofed`. You will still be able to access commands from `pofecli` in `pofed`.

The second notable change in the app structure is the integration of protobufs. Protobufs are a compiled form of messaging and therefore more performant than their JSONRPC counterparts.

This includes folders such as `pofe/internal`, `pofe/scripts`, `pofe/third_party`, and `pofe/proto`, as well as files following the regex `*.pb.go` and `*.pb.gw.go`.

Now we have a better understanding of the differences in our application. In the next section, we will migrate our application from v0.39 to v0.40+ Stargate.