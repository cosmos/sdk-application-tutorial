---
order: 4
---

# Messages

Messages are a great place to start when building a module because they define the actions that your application can make. Think of all the scenarios where a user would be able to update the state of the application in any way. These should be boiled down into basic interactions, similar to **CRUD** (Create, Read, Update, Delete).

Let's start with **Create**

## MsgCreateScavenge

Messages are `types` which live inside the `./x/scavenge/types/` directory. There is already a `msg.go` file but we will make a new file for each Message type. We can use `msg.go` as a starting point by renaming it to `MsgCreateScavenge.go` like:

```bash
# Assuming your current working directory is the root of your application
mv ./x/scavenge/types/msg.go  ./x/scavenge/types/MsgCreateScavenge.go
```

Inside this new file we will uncomment and follow the instructions of renaming variables until it looks as follows:

<<< @/scavenge/x/scavenge/types/MsgCreateScavenge.go

Notice that all Messages in the app need to follow the `sdk.Msg` interface. The Message `struct` contains all the necessary information when creating a new scavenge:

- `Creator` - Who created it. This uses the `sdk.AccAddress` type which represents an account in the app controlled by public key cryptograhy.
- `Description` - What is the question to be solved or description of the challenge.
- `SolutionHash` - The scrambled solution.
- `Reward` - This is the bounty that is awarded to whoever submits the answer first.

The `Msg` interface requires some other methods be set, like validating the content of the `struct`, and confirming the msg was signed and submitted by the Creator.

Now that one can create a scavenge the only other essential action is to be able to solve it. This should be broken into two separate actions as described before: `MsgCommitSolution` and `MsgRevealSolution`.

## MsgCommitSolution

This message type should live in `./x/scavenge/types/MsgCommitSolution.go` and look like:

<<< @/scavenge/x/scavenge/types/MsgCommitSolution.go

The Message `struct` contains all the necessary information when revealing a solution:

- `Scavenger` - Who is revealing the solution.
- `SolutionHash` - The scrambled solution (hash).
- `SolutionScavengerHash` - This is the hash of the combination of the solution and the person who solved it.

This message also fulfils the `sdk.Msg` interface.

## MsgRevealSolution

This message type should live in `./x/scavenge/types/MsgRevealSolution.go` and look like:

<<< @/scavenge/x/scavenge/types/MsgRevealSolution.go

The Message `struct` contains all the necessary information when revealing a solution:

- `Scavenger` - Who is revealing the solution.
- `SolutionHash` - The scrambled solution.
- `Solution` - This is the plain text version of the solution.

This message also fulfils the `sdk.Msg` interface.

## Codec

Once we have defined our messages, we need to describe to our encoder how they should be stored as bytes. To do this we edit the file located at `./x/scavenge/types/codec.go`. By describing our types as follows they will work with our encoding library:

<<< @/scavenge/x/scavenge/types/codec.go

## Alias

Now that we have these new message types, we'd like to make sure other parts of the module can access them. To do so we use the `./x/scavenge/alias.go` file. This imports the types from the nested `types` directory and makes them accessible at the modules top level directory.

<<< @/scavenge/x/scavenge/alias.go

It's great to have Messages, but we need somewhere to store the information they are sending. All persistent data related to this module should live in the module's `Keeper`.

Let's make a `Keeper` for our Scavenge Module next.
