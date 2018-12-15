var documenterSearchIndex = {"docs": [

{
    "location": "#",
    "page": "Introduction",
    "title": "Introduction",
    "category": "page",
    "text": ""
},

{
    "location": "#Agents.jl-Documentation-1",
    "page": "Introduction",
    "title": "Agents.jl Documentation",
    "category": "section",
    "text": "Agents.jl is a Julia framework for an agent-based modeling (ABM). It provides a structure and components for quickly implementing agent-based models, run them in batch, collect data, and visualize them. To that end, it provides the following functionalities: Default grids to run the simulation, including simple or toroidal 1D grids, simple or toroidal regular rectangular and triangular 2D grids, and simple or toroidal regular cubic 3D grids with rectangular or triangle connections. More space structure are to be implemented include arbitrary random networks.\nRunning the simulations in parallel on multiple cores or on clusters. (This is not ready yet)\nAutomatic data collection in a DataFrame at desired intervals.\nExploring the simulation results interactively in Data Voyegar 2.\nBatch running and batch data collection\nVisualize agent distributions on gridsJulia is a language that is especially suitable for ABMs, because a) it runs fast, b) it is easy to express your ideas in and quick to write, and c) it has rich and easy-to-use packages for data analysis.Agents.jl is lightweight and modular. It has a short learning curve, and allows one to extend its capabilities and express complicated modeling scenarios. Agents.jl is inspired by Mesa framework for Python.For a quick tutorial see the example models."
},

{
    "location": "#Installation-1",
    "page": "Introduction",
    "title": "Installation",
    "category": "section",
    "text": "Currently, the package is not added to Julia\'s package list, therefore, install it using this command:]add https://github.com/kavir1698/Agents.jl.git"
},

{
    "location": "#Table-of-contents-1",
    "page": "Introduction",
    "title": "Table of contents",
    "category": "section",
    "text": "This is still work in progress. I am working on the following:Adding more unit tests\nImplementing more examples\nImplementing arbitrary network spaces\nParallel computing of batch simulations\n3D visualization"
},

{
    "location": "boltzmann_example01/#",
    "page": "Boltzmann wealth distribution",
    "title": "Boltzmann wealth distribution",
    "category": "page",
    "text": ""
},

{
    "location": "boltzmann_example01/#Boltzmann-wealth-distribution-1",
    "page": "Boltzmann wealth distribution",
    "title": "Boltzmann wealth distribution",
    "category": "section",
    "text": "This is a simple agent-based model in economics. Despite its simplicity, it shows striking emergent wealth distribution. The first model that we will does not have spatial structure.We start with a number of agents all of which have one unit of wealth.\nAt every step, agents give one unit of their money (if they have any) to a random agent.\nWe will see how wealth will be distributed after a few steps.The code of this tutorial is in the examples/boltzmann_wealth_distribution.jl file on the Github repository."
},

{
    "location": "boltzmann_example01/#Building-the-model-1",
    "page": "Boltzmann wealth distribution",
    "title": "Building the model",
    "category": "section",
    "text": "Agents.jl structures simulations in three components. A model component that keeps all model-level variables and data, an agent component that keeps all agent-level variables and data, and space component that keeps space-level data.At the beginning of each building any model, define your types for each of these components. After that, you will have to initialize your model, and write one or two functions to change angets and/or the model at each step. This will be all before you can run your model and analyze its results.Now let\'s build our three types of this model:These types should be subtypes of the following abstract types:The agent type should be a subtype of AbstractAgent.\nThe model type should be a subtype of AbstractModel.\nThe space type should be a subtype of AbstractSpace.This subtyping will allow all the built-in functions to work on your define types.# 1. define agent type\r\nmutable struct MyAgent <: AbstractAgent\r\n  id::Integer\r\n  pos::Tuple{Integer, Integer, Integer}  # x,y,z coords\r\n  wealth::Integer\r\nendThe agent type has to have the id and the pos (for position) fields, but it can have any other fields that you desire. Here we add a wealth field that accepts integers. If your space is a grid, the position should accept a Tuple{Integer, Integer, Integer} representing x, y, z coordinates. Your grid does not have to be 3D. Here we want a regular 2D grid, so we will always keep z=1.# 2. define a model type\r\nmutable struct MyModel <: AbstractModel\r\n  agents::Array{AbstractAgent}  # an array of agents\r\n  scheduler::Function\r\nendThe model type has to have the space, agents, and scheduler fields. space will keep our space type, agents will be an array of all the agents, and scheduler will hold a function that specifies the order at which agents activate at each generation. See Scheduler functions for available scheduler functions, and Space functions for available space structures.Since for this first step, we do not need a space structure, we will not define a space type and not create field for it in the model struct.Now we write a function to instantiate the model:# 3. instantiate the model\r\nfunction instantiate_model(;numagents)\r\n  agents = [MyAgent(i, (1,1,1), 1) for i in 1:numagents]  # create a list of agents\r\n  model = MyModel(agents, random_activation)  # instantiate the model\r\n  return model\r\nendWe can start our model by running the function:model = instantiate_model(numagents=100)Now we have to write a step function for agents. An step function should always take two positional arguments: first an agent object, and second your model object. Every agent will perform actions within this function at each step. Here, we say if an agent activate (defined by the scheduler), and has any wealth, it should choose a random agent and give one unit of its wealth to it.# Agent step function: define what the agent does at each step\r\nfunction agent_step!(agent::AbstractAgent, model::AbstractModel)\r\n  if agent.wealth == 0\r\n    return\r\n  else\r\n    agent2 = model.agents[rand(1:nagents(model))]\r\n    agent.wealth -= 1\r\n    agent2.wealth += 1\r\n  end\r\nendThat\'s it. We can run the model. The step! function (see Model functions) runs the model. We can run it without collecting data for one step:step!(agent_step!, model)or for multiple steps:step!(agent_step!, model, 10)or we can run it for multiple steps and collect data:agent_properties = [:wealth]\r\nsteps_to_collect_data = collect(1:10)\r\ndata = step!(agent_step!, model, 10, agent_properties, steps_to_collect_data)This code collects all agents\' wealth at each step and stores them in a DataFrame.  We can then interactively plot the data in DataVoyager and see the distribution of wealth at each stepvisualize_data(data)Often, in ABM we want to run a model many times and observe the average behavior of the system. We can do this easily with the batchrunner function. It accepts the same arguments and in the same order as the step! function:data = batchrunner(agent_step!, model, 10, agent_properties, steps_to_collect_data, 10)We can include a grid in our model and let the agents interact only with those in the same node. To that end, we will have to modify the model type and write a space type:# Add grid field to the model type\r\nmutable struct MyModel2 <: AbstractModel\r\n  space::AbstractSpace\r\n  agents::Array{AbstractAgent}  # an array of agents\r\n  scheduler::Function\r\nend\r\n\r\n# define a space type\r\nmutable struct MyGrid <: AbstractSpace\r\n  dimensions::Tuple{Integer, Integer, Integer}\r\n  space\r\n  agent_positions::Array  # an array of arrays for each grid node\r\nendThe space type has to have the dimensions, space, and agent_positions fields. dimensions should be there only if you are using a grid space. The space field keeps the actual graph of the space. The agent_positions is always an array of arrays. An array for each node of the space. It will be used to keep the agent.ids of agents in each node.We also have to modify the model instantiation function:function instantiate_model(;numagents, griddims)\r\n  agents = [MyAgent(i, (1,1,1), 1) for i in 1:numagents]  # create a list of agents\r\n  agent_positions = [Array{Integer}(undef, 0) for i in 1:gridsize(griddims)]  # an array of arrays for each node of the space\r\n  mygrid = MyGrid(griddims, grid(griddims), agent_positions)  # instantiate the grid structure\r\n  model = MyModel2(mygrid, agents, random_activation)  # instantiate the model\r\n  return model\r\nend\r\n\r\nmodel = instantiate_model(numagents=100, griddims=(5,5,1))We should now add agents to random positions on the grid. The add_agent_to_grid!  function updates the agent_positions field of model.space. It is possible to add agents to specific nodes by specifying a node number of x,y,z coordinates (see Space functions for more details).for agent in model.agents\r\n  add_agent_to_grid!(agent, model)\r\nendThe model can be run as we did previously."
},

{
    "location": "forest_fire/#",
    "page": "Forest fire",
    "title": "Forest fire",
    "category": "page",
    "text": ""
},

{
    "location": "forest_fire/#Forest-fire-model-1",
    "page": "Forest fire",
    "title": "Forest fire model",
    "category": "section",
    "text": "The model is defined as a cellular automaton on a grid with Ld cells. L is the side length of the grid and d is its dimension. A cell can be empty, occupied by a tree, or burning. The model of Drossel and Schwabl (1992) is defined by four rules which are executed simultaneously: A burning cell turns into an empty cell\nA tree will burn if at least one neighbor is burning\nA tree ignites with probability f even if no neighbor is burning\nAn empty space fills with a tree with probability pThe above explanation is from Wikipedia. Given that, we can build our model.The complete code of this example is in the examples/forest_fire.jl file on the Github repository.As usual, we define the agent, model, and space types. \nmutable struct Tree <: AbstractAgent\n  id::Integer\n  pos::Tuple{Integer, Integer, Integer}\n  status::Bool  # true is green and false is burning\nend\n\nmutable struct Forest <: AbstractModel\n  space::AbstractSpace\n  agents::Array{AbstractAgent}\n  scheduler::Function\n  f::Float64  # probability that a tree will ignite\n  d::Float64  # forest density\n  p::Float64  # probability that a tree will grow in an empty space\nend\n\nmutable struct MyGrid <: AbstractSpace\n  dimensions::Tuple{Integer, Integer, Integer}\n  space\n  agent_positions::Array  # an array of arrays for each grid node\nend\nThe agent type Tree has three fields: id and pos, which have to be there for any model, and a status field that we introduce for this specific mode. The status field will hold true for a green tree and false for a burning one. All model parameters go to the model type Forest in addition to the compulsory space, agents, and scheduler fields. The space type has the three minimum fields.We can now instantiate the model. It is a good idea to put the instantiate lines in a function so that it will be easy to restart the model and change its parameters.:function model_initiation(;f, d, p, griddims, seed)\n  Random.seed!(seed)\n  # initialize the model\n  # we start the model without creating the agents first\n  agent_positions = [Array{Integer}(undef, 0) for i in 1:gridsize(griddims)]\n  mygrid = MyGrid(griddims, grid(griddims, false, true), agent_positions)  # create a 2D grid where each node is connected to at most 8 neighbors.\n  forest = Forest(mygrid, Array{Tree}(undef, 0), random_activation, f, d, p)\n\n  # create and add trees to each node with probability d, which determines the density of the forest\n  for node in 1:gridsize(forest.space.dimensions)\n    pp = rand()\n    if pp <= forest.d\n      tree = Tree(node, (1,1,1), true)\n      add_agent_to_grid!(tree, node, forest)\n      push!(forest.agents, tree)\n    end\n  end\n  return forest\nendNote that to keep the simulation results repeatable, we include Random.seed!(seed), so that the random number generator start from the same position everytime.We should now make a step function. It maybe easier to randomly go through every node on the grid and decide what happens to the node depending on its state. If its empty, add a tree with probability p, if it has a burning tree, remove it from the node, and if it has a green tree with a burning neighbor, burn the tree. Doing this requires a step function for the model, not every single agent. A model step function only accepts a model type as its argument.function forest_step!(forest)\n  shuffled_nodes = shuffle(1:gridsize(forest.space.dimensions))\n  for node in shuffled_nodes  # randomly go through the cells and \n    if length(forest.space.agent_positions[node]) == 0  # the cell is empty, maybe a tree grows here?\n      p = rand()\n      if p <= forest.p\n        treeid = forest.agents[end].id +1\n        tree = Tree(treeid, (1,1,1), true)\n        add_agent_to_grid!(tree, node, forest)\n        push!(forest.agents, tree)\n      end\n    else\n      treeid = forest.space.agent_positions[node][1]  # id of the tree on this cell\n      tree = id_to_agent(treeid, forest)  # the tree on this cell\n      if tree.status == false  # if it is has been burning, remove it.\n        kill_agent!(tree, forest)\n      else\n        f = rand()\n        if f <= forest.f  # the tree ignites on fire\n          tree.status = false\n        else  # if any neighbor is on fire, set this tree on fire too\n          neighbor_cells = node_neighbors(tree, forest)\n          for cell in neighbor_cells\n            treeid = get_node_contents(cell, forest)\n            if length(treeid) != 0  # the cell is not empty\n              treen = id_to_agent(treeid[1], forest)\n              if treen.status == false\n                tree.status = false\n                break\n              end\n            end\n          end\n        end\n      end\n    end\n  end\nend\nBecause an agent step function is necessary for the built-in step! methods, we make a dummy agent step function that accepts two arguments (one for the agent object and one for the model object):function dummy_agent_step(a, b)  # because we do not need it, but it is required by the step! function\nendThat is all before we run the model.# create the model\nforest = model_initiation(f=0.1, d=0.8, p=0.1, griddims=(20, 20, 1), seed=2)\n\n# choose which agent properties you want to collect\nagent_properties = [:status, :pos]\n\n# what functions to apply to the chosen agent properties before collecting them. `length` will show the number of trees and `count` the number of green trees.\naggregators = [length, count]\n\n# at which steps to collect the data\nsteps_to_collect_data = collect(1:100)\n\n# Run the model for 100 steps\ndata = step!(dummy_agent_step, forest_step!, forest, 100, agent_properties, aggregators, steps_to_collect_data)\n\n# explore data visually\nvisualize_data(data)Alternatively, collect agent positions and plot them on a 2D gridforest = model_initiation(f=0.05, d=0.8, p=0.01, griddims=(20, 20, 1), seed=2)\ndata = step!(dummy_agent_step, forest_step!, forest, 10, agent_properties, collect(1:10))\nfor i in 1:10\n  visualize_2D_agent_distribution(data, forest, Symbol(\"pos_$i\"), types=Symbol(\"status_$i\"), savename=\"step_$i\", cc=Dict(true=>\"green\", false=>\"red\"))\nendStep 1(Image: )Step 2(Image: )Step 3(Image: )# Optionally Run batch simulation\ndata = batchrunner(dummy_agent_step, forest_step!, forest, 10, agent_properties, aggregators, steps_to_collect_data, 10)\n# Create a column with the mean and std of the :status_count columns from differen steps.\ncolumnnames = vcat([:status_count], [Symbol(\"status_count_$i\") for i in 1:9])\nusing StatsBase\ncombine_columns!(data, columnnames, [StatsBase.mean, StatsBase.std])\n\n# And write the results to file\nwrite_to_file(df=data, filename=\"forest_model.csv\")"
},

{
    "location": "builtin_functions/#",
    "page": "Built-in funtions",
    "title": "Built-in funtions",
    "category": "page",
    "text": ""
},

{
    "location": "builtin_functions/#Built-in-function-1",
    "page": "Built-in funtions",
    "title": "Built-in function",
    "category": "section",
    "text": ""
},

{
    "location": "builtin_functions/#Agents.as_added",
    "page": "Built-in funtions",
    "title": "Agents.as_added",
    "category": "function",
    "text": "as_added(model::AbstractModel)\n\nActivates all agents at each step as they have been added to the model.\n\n\n\n\n\n"
},

{
    "location": "builtin_functions/#Agents.random_activation",
    "page": "Built-in funtions",
    "title": "Agents.random_activation",
    "category": "function",
    "text": "random_activation(model::AbstractModel)\n\nActivates all agents randomly at each step.\n\n\n\n\n\n"
},

{
    "location": "builtin_functions/#Scheduler-functions-1",
    "page": "Built-in funtions",
    "title": "Scheduler functions",
    "category": "section",
    "text": "as_added\r\nrandom_activation"
},

{
    "location": "builtin_functions/#Agents.grid",
    "page": "Built-in funtions",
    "title": "Agents.grid",
    "category": "function",
    "text": "grid(dims::Tuple{Integer, Integer, Integer}, periodic=false, triangle=false)\n\nReturn a grid based on its dimensions. x, y, and z are the dimensions of the grid. If all dimensions are 1, it will return a 0D space, where all agents are in the same position. If x is more than 1, but y and z are 1, it will return a 1D grid. If x and y are more than 1, and z=1, it will return a 2D regular grid.\n\nperiodic=true will create toroidal grids.\ntriangle=true works when the dimensions of the grid are 2D. It will return a regular grid in which each node is at most connected to eight neighbors. If false, each node will be at most connected to four neighbors.\n\n\n\n\n\n"
},

{
    "location": "builtin_functions/#Agents.gridsize",
    "page": "Built-in funtions",
    "title": "Agents.gridsize",
    "category": "function",
    "text": "gridsize(dims::Tuple{Integer, Integer, Integer})\n\nReturns the size of a grid with dimenstions dims.\n\n\n\n\n\n"
},

{
    "location": "builtin_functions/#Agents.add_agent_to_grid!",
    "page": "Built-in funtions",
    "title": "Agents.add_agent_to_grid!",
    "category": "function",
    "text": "add_agent_to_grid!(agent::AbstractAgent, pos::Tuple{Integer, Integer, Integer}, model::AbstractModel)\n\nAdd agentID to a position on the grid. pos is tuple of x, y, z coordinates of the grid node. If pos is not given, the agent is added to a random position.\n\nThis function is for positioning agents on the grid for the first time.\n\n\n\n\n\nadd_agent_to_grid!(agent::AbstractAgent, pos::Integer, model::AbstractModel)\n\nAdd agentID to a position in the grid. pos is the node number of the grid. If pos is not given, the agent is added to a random position.\n\nThis function is for positioning agents on the grid for the first time.\n\n\n\n\n\n"
},

{
    "location": "builtin_functions/#Agents.move_agent_on_grid!",
    "page": "Built-in funtions",
    "title": "Agents.move_agent_on_grid!",
    "category": "function",
    "text": "move_agent_on_grid!(agent::AbstractAgent, pos::Tuple{Integer, Integer, Integer}, model::AbstractModel)\n\nAdds agentID to a new position in the grid and removes it from the old position. Also updates the agent to represent the new position. pos is tuple of x, y, z coordinates of the grid node. If pos is not given, the agent is moved to a random position on the grid. \n\n\n\n\n\nmove_agent_on_grid!(agent::AbstractAgent, pos::Integer, model::AbstractModel)\n\nAdds agentID to a new position in the grid and removes it from the old position. Also updates the agent to represent the new position. pos is an integer showing the number of the node on the grid node. If pos is not given, the agent is moved to a random position on the grid.\n\n\n\n\n\n"
},

{
    "location": "builtin_functions/#Agents.add_agent_to_grid_single!",
    "page": "Built-in funtions",
    "title": "Agents.add_agent_to_grid_single!",
    "category": "function",
    "text": "add_agent_to_grid_single!(agent::AbstractAgent, model::AbstractModel)\n\nAdds agent to a random node on the grid while respecting a maximum one agent per node.\n\n\n\n\n\n"
},

{
    "location": "builtin_functions/#Agents.move_agent_on_grid_single!",
    "page": "Built-in funtions",
    "title": "Agents.move_agent_on_grid_single!",
    "category": "function",
    "text": "move_agent_on_grid_single!(agent::AbstractAgent, model::AbstractModel)\n\nMoves agent to a random nodes on the grid while respecting a maximum of one agent per node.\n\n\n\n\n\n"
},

{
    "location": "builtin_functions/#Agents.find_empty_nodes",
    "page": "Built-in funtions",
    "title": "Agents.find_empty_nodes",
    "category": "function",
    "text": "find_empty_nodes(model::AbstractModel)\n\nReturns the coordinates of empty nodes on the model grid.\n\n\n\n\n\n"
},

{
    "location": "builtin_functions/#Agents.coord_to_vertex",
    "page": "Built-in funtions",
    "title": "Agents.coord_to_vertex",
    "category": "function",
    "text": "coord_to_vertex(coord::Tuple{Integer, Integer, Integer}, model::AbstractModel)\n\nReturns the node number from x, y, z coordinates.\n\n\n\n\n\ncoord_to_vertex(coord::Tuple{Integer, Integer, Integer}, dims::Tuple{Integer, Integer, Integer})\n\nReturns node number from x, y, z coordinates.\n\n\n\n\n\n"
},

{
    "location": "builtin_functions/#Agents.vertex_to_coord",
    "page": "Built-in funtions",
    "title": "Agents.vertex_to_coord",
    "category": "function",
    "text": "vertex_to_coord(vertex::Integer, model::AbstractModel)\n\nReturns the coordinates of a node given its number on the graph.\n\n\n\n\n\nvertex_to_coord(vertex::Integer, dims::Tuple{Integer, Integer, Integer})\n\nReturns the coordinates of a node given its number on the graph.\n\n\n\n\n\n"
},

{
    "location": "builtin_functions/#Agents.get_node_contents",
    "page": "Built-in funtions",
    "title": "Agents.get_node_contents",
    "category": "function",
    "text": "get_node_contents(agent::AbstractAgent, model::AbstractModel)\n\nReturns all agents\' ids in the same node as the agent.\n\n\n\n\n\nget_node_contents(coords::Tuple, model::AbstractModel)\n\nReturns the id of agents in the node at coords\n\n\n\n\n\n"
},

{
    "location": "builtin_functions/#Agents.id_to_agent",
    "page": "Built-in funtions",
    "title": "Agents.id_to_agent",
    "category": "function",
    "text": "id_to_agent(id::Integer, model::AbstractModel)\n\nReturns an agent given its ID.\n\n\n\n\n\n"
},

{
    "location": "builtin_functions/#Agents.node_neighbors",
    "page": "Built-in funtions",
    "title": "Agents.node_neighbors",
    "category": "function",
    "text": "node_neighbors(agent::AbstractAgent, model::AbstractModel)\n\nReturns neighboring node coords of the node on which the agent resides.\n\n\n\n\n\n"
},

{
    "location": "builtin_functions/#Space-functions-1",
    "page": "Built-in funtions",
    "title": "Space functions",
    "category": "section",
    "text": "grid(dims::Tuple{Integer, Integer, Integer}, periodic=false, triangle=false)\r\ngridsize\r\nadd_agent_to_grid!\r\nmove_agent_on_grid!\r\nadd_agent_to_grid_single!\r\nmove_agent_on_grid_single!\r\nfind_empty_nodes\r\ncoord_to_vertex\r\nvertex_to_coord\r\nget_node_contents\r\nid_to_agent\r\nnode_neighbors"
},

{
    "location": "builtin_functions/#Agents.nagents",
    "page": "Built-in funtions",
    "title": "Agents.nagents",
    "category": "function",
    "text": "nagents(model::AbstractModel)\n\nReturns the number of agents.\n\n\n\n\n\n"
},

{
    "location": "builtin_functions/#Agents.kill_agent!",
    "page": "Built-in funtions",
    "title": "Agents.kill_agent!",
    "category": "function",
    "text": "kill_agent!(agent::AbstractAgent, model::AbstractModel)\n\nRemoves an agent from the list of agents and from the space.\n\n\n\n\n\n"
},

{
    "location": "builtin_functions/#Agents.step!",
    "page": "Built-in funtions",
    "title": "Agents.step!",
    "category": "function",
    "text": "step!(agent_step::Function, model::AbstractModel)\n\nUpdates agents one step. Agents will be updated as specified by the model.scheduler.\n\n\n\n\n\nstep!(agent_step::Function, model::AbstractModel, nsteps::Integer)\n\nRepeats the step function nsteps times without collecting data.\n\n\n\n\n\nstep!(agent_step::Function, model::AbstractModel, nsteps::Integer, agent_properties::Array{Symbol}, steps_to_collect_data::Array{Int64})\n\nRepeats the step function nsteps times, and collects all agent fields in agent_properties at steps steps_to_collect_data.\n\n\n\n\n\nstep!(agent_step::Function, model::AbstractModel, nsteps::Integer, agent_properties::Array{Symbol}, aggregators::Array{Function}, steps_to_collect_data::Array{Integer})\n\nRepeats the step function nsteps times, and applies functions in aggregators to values of agent fields in agent_properties at steps steps_to_collect_data.\n\n\n\n\n\nstep!(agent_step::Function, model_step::Function, model::AbstractModel)\n\nUpdates agents one step without collecting data. This function accepts two functions, one for update agents and one for updating the whole model one after all the agents have been updated.\n\n\n\n\n\nstep!(agent_step::Function, model_step::Function, model::AbstractModel, nsteps::Integer)\n\nRepeats the step function nsteps times without collecting data.\n\n\n\n\n\nstep!(agent_step::Function, model_step::Function, model::AbstractModel, nsteps::Integer, agent_properties::Array{Symbol}, steps_to_collect_data::Array{Integer})\n\nRepeats the step function nsteps times, and collects all agent fields in agent_properties at steps steps_to_collect_data.\n\n\n\n\n\nstep!(agent_step::Function, model_step::Function, model::AbstractModel, nsteps::Integer, agent_properties::Array{Symbol}, aggregators::Array{Function}, steps_to_collect_data::Array{Integer})\n\nRepeats the step function nsteps times, and applies functions in aggregators to values of agent fields in agent_properties at steps steps_to_collect_data.\n\n\n\n\n\n"
},

{
    "location": "builtin_functions/#Model-functions-1",
    "page": "Built-in funtions",
    "title": "Model functions",
    "category": "section",
    "text": "nagents\r\nkill_agent!\r\nstep!"
},

]}
