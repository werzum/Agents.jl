# API

The core API is defined by [`AgentBasedModel`](@ref), [Space](@ref Space), [`AbstractAgent`](@ref) and [`step!`](@ref), which are described in the [Tutorial](@ref) page. The functionality described here builds on top of the core API.

## Agent information and retrieval
```@docs
space_neighbors
random_agent
nagents
allagents
nextid
```
In addition to these functions, a number of standard Julia methods have been implemented for `AgentBasedModel`.
```@docs
getindex
getproperty
```

## Model-Agent interaction
The following API is mostly universal across all types of [Space](@ref Space).
Only some specific methods are exclusive to a specific type of space, but we think
this is clear from the documentation strings (if not, please open an issue!).
```@docs
add_agent!
add_agent_pos!
add_agent_single!
move_agent!
move_agent_single!
kill_agent!
genocide!
```

## Discrete space exclusives
```@docs
node_neighbors
nv(::ABM)
ne(::ABM)
has_empty_nodes
find_empty_nodes
pick_empty
get_node_contents
get_node_agents
isempty(::Integer, ::ABM)
NodeIterator
nodes
```

## Continuous space exclusives
```@docs
interacting_pairs
nearest_neighbor
elastic_collision!
index!
```
## Simulations
The central simulation function is [`step!`](@ref), which is mentioned in our [Tutorial](@ref).
But there are other functions that are related to simulations listed here.
```@docs
paramscan
sample!
dummystep
```

## Schedulers
The schedulers of Agents.jl have a very simple interface. All schedulers are functions,
that take as an input the ABM and return an iterator over agent IDs.
Notice that this iterator can be a "true" iterator or can be just a standard vector of IDs.
You can define your own scheduler according to this API and use it when making an [`AgentBasedModel`](@ref).
```@docs
fastest
by_id
random_activation
partial_activation
property_activation
```

## Parallelization

```@docs
parallel_replicates
```

## Plotting
Plotting functionality comes from `AgentsPlots`, which uses Plots.jl. You need to install both `AgentsPlots`, as well as a plotting backend (we use GR) to use the following functions.

```@docs
plotabm
plot2D
plot_CA1D
plot_CA2D
plot_CA2Dgif
```
