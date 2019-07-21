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
    "text": "Agents.jl is a Julia framework for an agent-based modeling (ABM). It provides a structure and components for quickly implementing agent-based models, run them in batch, collect data, and visualize them. To that end, it provides the following functionalities: Default grids to run the simulation, including simple or toroidal 1D grids, simple or toroidal regular rectangular and triangular 2D grids, and simple or toroidal regular cubic 3D grids with von Neumann or Moore neighborhoods. Users can use their defined graphs too.\nAutomatic data collection in a DataFrame at desired intervals.\nExploring the simulation results interactively in Data Voyegar 2.\nBatch running and batch data collection\nVisualize agent distributions on gridsMany agent-based modeling frameworks have been constructed to ease the process of building and analyzing ABMs (see here for a review). Notable examples are NetLogo, Repast, MASON, and Mesa. Implementing an ABM framework in Julia has several advantages. First, using a general purpose programming language instead of a custom scripting language, such as NetLogo\'s, removes a learning step and provides a single environment for building the models and analyzing their results. Julia has a rich ecosystem for data analysis and visualization. Second, Julia is easier-to-use than Java (used for Repast and MASON), and provides a REPL (Read-Eval-Print-Loop) environment to build and analyze models interactively. Third, unlike Python (used for Mesa), Julia is easy-to-write but also fast to run. This is a crucial criterion for models that require considerable computations.Agents.jl provides users with core components that make it easy to build ABMS, run them in batch, collect model outputs, and visualize the results. Briefly, the framework eases the following tasks for the user, and is at the same time flexible enough to allow implementation of almost any ABM. Schedulers: users can choose from a range of activation regimes,i.e. the order with which agents activate, or implement a custom one. Spatial structures: the framework implements 1D, 2D, and 3D grids which can optionally have periodic boundary conditions, meaning that edges of a grid connect to their opposite edges. An agent exiting from one edge enters the grid from the opposite edge. Moreover, users can construct irregular networks as the space where the agents live. Data collection: users only specify the kind of data they need and the framework automatically collects them in a table. The collected data are then ready to be analyzed and visualized. Visualization users can create custom plots interactively from the simulation outputs using the Data Voyager platform. Furthermore, they can visualize agent distributions on 2D grids. Batch run: in agent-based modeling, we can rarely make conclusions from single simulation runs. Instead we run many replicates of a simulation and observe the mean behavior of the system. Agents.jl automates running simulation replicates and collecting and aggregating their results.Agents.jl is lightweight and modular. It has a short learning curve, and allows one to extend its capabilities and express complicated modeling scenarios. Agents.jl is inspired by Mesa framework for Python."
},

{
    "location": "#Other-features-1",
    "page": "Introduction",
    "title": "Other features",
    "category": "section",
    "text": ""
},

{
    "location": "#Aggregating-collected-data-1",
    "page": "Introduction",
    "title": "Aggregating collected data",
    "category": "section",
    "text": "Sometimes, it is easier to take summary statistics than collect all the raw data. The step! function accepts a list of aggregating functions, e.g. mean and median. If such a list is provided, each function will apply to a list of the agent fields at each step. Only the summary statistics will be returned. It is possible to pass a dictionary of agent fields and aggregator functions that only apply to those fields. To collect data from the model object, pass :model instead of an agent field. To collect data from a list of agent objects, rather than a list of agents\' fields, pass :agent."
},

{
    "location": "#Running-multiple-replicates-1",
    "page": "Introduction",
    "title": "Running multiple replicates",
    "category": "section",
    "text": "Since ABMs are stochastic, researchers often run multiple replicates of a simulation and observe its mean behavior. Agents.jl provides the batchrunner function which allows running and collecting data from multiple simulation replicates. Furthermore, the combine_columns! function merges the results of simulation replicates into single columns using user-passed aggregator functions."
},

{
    "location": "#Exploratory-data-analysis-1",
    "page": "Introduction",
    "title": "Exploratory data analysis",
    "category": "section",
    "text": "Julia has extensive tools for data analysis. Having the results of simulations in DataFrame format makes it easy to take advantage of most of such tools. Examples include the VegaLite.jl package for data visualization, which uses a grammar of graphics syntax to produce interactive plots. Moreover, DataVoyager.jl provides an interactive environment to build custom plots from DataFrames. Agents.jl provides visualize_data function that sends the simulation outputs to Data Voyager. "
},

{
    "location": "#Why-we-need-agent-based-modeling-1",
    "page": "Introduction",
    "title": "Why we need agent-based modeling",
    "category": "section",
    "text": "Agent-based models (ABMs) are increasingly recognized as the approach for studying complex systems. Complex systems cannot be fully understood using the traditional mathematical tools that aggregate the behavior of elements in a system. The behavior of a complex system depends on the behavior and interaction of its elements (agents). Small changes in the input to complex systems or the behavior of its agents can lead to large changes in system\'s outcome. That is to say a complex system\'s behavior is nonlinear, and that it is not the sum of the behavior of its elements. Use of ABMs have become feasible after the availability of computers and has been growing since, especially in modeling biological and economical systems, and has extended to social studies and archeology.An ABM consists of autonomous agents that behave given a set of rules. A classic and simple example of an ABM is a cellular automaton. A cellular automaton is a regular grid where each cell is an agent. Cells have different states, for example, on or off. A cell\'s state can change at each step depending on the state of its neighbors. This simple model can lead to unpredicted emergent patterns on the grid. Famous examples of which are Wolfram\'s rule 22 and rule 30 (see here and figure below).(Image: Wolfram\'s rule 22 implemented in Agents.jl) (Image: Wolfram\'s rule 30 implemented in Agents.jl)Another classic example of an ABM is Schelling\'s segregation model. This model also uses a regular grid and defines agents as the cells of the grid. Agents can be from different social groups. Agents are happy/unhappy based on the fraction of their neighbors that belong to the same group as they are. If they are unhappy, they keep moving to new locations until they are happy. Schelling\'s model shows that even small preferences of agents to have neighbors belonging to the same group (e.g. preferring that at least 30% of neighbors to be in the same group) could lead to total segregation of neighborhoods. This is another example of an emergent phenomenon from simple interactions of agents."
},

{
    "location": "#Tutorial-1",
    "page": "Introduction",
    "title": "Tutorial",
    "category": "section",
    "text": "For a quick tutorial see the example models. I recommend starting with Schelling\'s segregation model."
},

{
    "location": "#Installation-1",
    "page": "Introduction",
    "title": "Installation",
    "category": "section",
    "text": "The package is in Julia\'s package list. Install it using this command:]add Agents"
},

{
    "location": "#Table-of-contents-1",
    "page": "Introduction",
    "title": "Table of contents",
    "category": "section",
    "text": ""
},

{
    "location": "schelling/#",
    "page": "Schelling\'s segregation model",
    "title": "Schelling\'s segregation model",
    "category": "page",
    "text": ""
},

{
    "location": "schelling/#Schelling\'s-segregation-model-1",
    "page": "Schelling\'s segregation model",
    "title": "Schelling\'s segregation model",
    "category": "section",
    "text": ""
},

{
    "location": "schelling/#Agents.jl\'s-architecture-1",
    "page": "Schelling\'s segregation model",
    "title": "Agents.jl\'s architecture",
    "category": "section",
    "text": "Agents.jl is composed of components for building models, building and managing space structures, collecting data, running batch simulations, and data visualization.For building any ABM, users have to define at least three objects and one function (Fig. 1). Agents.jl\'s tools manage the rest of the path to producing data and visualizations (Fig. 1). We now demonstrate Agents.jl\'s architecture and features through building Schelling\'s segregation model.(Image: Fig. 1. __Path from building a model to gaining information from the model using Agents.jl.__ The box in cyan is what the user has to provide and the boxes in green are what Agents.jl provides.)We implement the following definition of Schelling\'s segregation model:Agents are of two kind (0 or 1).\nEach agent has eight neighbors (Moore neighborhoods).\nIf an agent is in the same group with at least three neighbors, then it is happy.\nIf an agent is unhappy, it keeps moving to new locations until it is happy."
},

{
    "location": "schelling/#Defining-a-model-object-1",
    "page": "Schelling\'s segregation model",
    "title": "Defining a model object",
    "category": "section",
    "text": "Building models using Agents.jl, we always start by defining three basic objects: one for the model, one for the the agents and one for the space.A model object is a subtype of AbstractModel. Making the model a subtype of AbstractModel will make Agents.jl methods available to the model. It needs to have the following three fields: scheduler, space, and agents. We can add more fields if needed.The scheduler field accepts a function that defines the order with which agents will activate at each step. The function should accept the model object as its input and return a list of agent indices. Agents.jl provides three schedulers: as_added to activate agents as they have been added to the model, random_activation to activate agents randomly, and partial_activation to activate only a random fraction of agents at each step.using Agents\r\n\r\nmutable struct SchellingModel <: AbstractModel  # A model object should always be a subtype of AbstractModel\r\n space::AbstractSpace  # A space object, which is a field of the model object is always subtype of AbstractSpace\r\n agents::Array{AbstractAgent}  # a list of agents\r\n scheduler::Function\r\n min_to_be_happy::Integer  # minimum number of neighbors to be of the same kind so that they are happy\r\nendIt is best to make any model parameter a field of the model object. We add the minimum number of neighbors of the same kind for an agent to be happy as a field of the model (min_to_be_happy). "
},

{
    "location": "schelling/#Defining-an-agent-object-1",
    "page": "Schelling\'s segregation model",
    "title": "Defining an agent object",
    "category": "section",
    "text": "Next, we define an agent object. Agent objects are subtypes of AbstractAgent and should always have the following fields: id which stores agent IDs as integers, and pos to store each agent\'s position. Agent positions can be tuple of integers as coordinates of nodes of a grid (1D, 2D or 3D). Positions can also be integers only, referring to the number of a node in an irregular network.mutable struct SchellingAgent <: AbstractAgent # An agent object should always be a subtype of AbstractAgent\r\n id::Integer\r\n pos::Tuple{Integer, Integer}\r\n mood::Bool # true is happy and false is unhappy\r\n group::Integer\r\nendWe add two more fields for this model, namely a mood field which will store true for a happy agent and false for an unhappy one, and an group field which stores 0 or 1 representing two groups."
},

{
    "location": "schelling/#Defining-a-space-object-1",
    "page": "Schelling\'s segregation model",
    "title": "Defining a space object",
    "category": "section",
    "text": "Finally, we define a space object. The space object is always a subtype of AbstractSpace and should have at least the following three fields. First, a space field which holds the spatial structure of the model. Agents.jl uses network structures from the LightGraphs package to represent space.  It provides 1D, 2D and 3D grids. The grids may have periodic boundary conditions, meaning nodes on the left and right edges and top and bottom edges are connected to one another. Furthermore, the nodes on a grid may have von Neumann neighborhoods, i.e. only connect to their orthogonal neighbors, or Moore neighborhoods, i.e. connect to their orthogonal and diagonal neighbors. Users may also provide arbitrary networks as their model\'s spatial structure.The second field of the space object is the dimensions of the grid or network. Lastly, every space object should have an agent_positions field. This field is an array of arrays for each node of the network. Each inner array will record the ID of the agents on that position. Agents.jl keeps the position of agents in two places. One in each agent\'s object and one in the agent_positions.mutable struct MyGrid <: AbstractSpace # A space object should always be a subtype of AbstractSpace\r\n dimensions::Tuple{Integer, Integer}\r\n space\r\n agent_positions::Array  # an array of arrays for each grid node\r\nend"
},

{
    "location": "schelling/#Instantiating-the-model-1",
    "page": "Schelling\'s segregation model",
    "title": "Instantiating the model",
    "category": "section",
    "text": "Now that we have defined the basic objects, we should instantiate the model. We put the model instantiation in a function so that it will be easy to recreate the model and change its parameters.function instantiate_model(; numagents=320, griddims=(20, 20), min_to_be_happy=3)\r\n agent_positions = [Array{Integer}(undef, 0) for i in 1:gridsize(griddims)]  # 1\r\n mygrid = MyGrid(griddims, grid(griddims, false, true), agent_positions)  # 2\r\n model = SchellingModel(mygrid, AbstractAgent[], random_activation, min_to_be_happy)  # 3\r\n  \r\n agents = vcat(\r\n  [SchellingAgent(i, (1,1), false, 0) for i in 1:(numagents/2)], [SchellingAgent(i, (1,1), false, 1) for i in (numagents/2)+1:numagents])  # 4\r\n\r\n for agent in agents \r\n  add_agent_single!(agent, model)  # 5\r\n end\r\n return model\r\nendExplanations below correspond to the numbered lines in the code snippet above:creates an array of empty arrays as many as there are agents.\ncreates a 2D grid with nodes that have Moore neighborhoods. The grid does not have periodic edges.\ninstantiates the model. It uses an empty array for agents.\ncreates an array of agents with two different groups. All agents have a temporary coordinate of (1, 1).\nadds agents to random nodes in space and to the agents array in the model object. add_agent_single! ensures that there are no more than one agent per node."
},

{
    "location": "schelling/#Defining-a-step-function-1",
    "page": "Schelling\'s segregation model",
    "title": "Defining a step function",
    "category": "section",
    "text": "The last step of building our ABM is defining a step function. Any ABM model should have at least one and at most two step functions. An agent step function is always required. Such an agent step function defines what happens to an agent when it activates. Sometimes we will need also need a function that changes all agents at once, or changes a model property. In such cases, we can also provide a model step function.An agent step function should only accept two arguments, the first of which an agent object and the second of which a model object. The model step function should accept only one argument, that is the model object. It is possible to only have a model step function, in which case users have to use the built-in dummystep as the agent step function.function agent_step!(agent, model)\r\n if agent.mood == true\r\n  return\r\n end\r\n while agent.mood == false\r\n  neighbor_cells = node_neighbors(agent, model)\r\n  same = 0\r\n  for nn in neighbor_cells\r\n   nsid = get_node_contents(nn, model)\r\n   if length(nsid) == 0\r\n    continue\r\n   else\r\n    nsid = nsid[1]\r\n   end\r\n   ns = model.agents[nsid].group\r\n   if ns == agent.group\r\n    same += 1\r\n   end\r\n  end\r\n  if same >= model.min_to_be_happy\r\n   agent.mood = true\r\n  else\r\n   # move\r\n   move_agent_single!(agent, model)\r\n  end\r\n end\r\nendFor building this implementation of Schelling\'s segregation model, we only need an agent step function.When an agent activates, it follows the following process:If the agent is already happy, it does not do anything.\nIf it is not happy, it counts the number of its neighbors that are from the same group.\nIf this count is equal to min_to_be_happy, the agent will be happy...\n...otherwise the agent will keep moving to random empty nodes on the grid until it is happy.For doing these operations, we used some of the built-in functions of Agents.jl, such as node_neighbors that returns the neighboring nodes of the node on which the agent resides, get_node_contents that returns the IDs of the agents on a given node, and move_agent_single! which moves agents to random empty nodes on the grid. A full list of built-in functions and their explanations are available in the online manual."
},

{
    "location": "schelling/#Running-the-model-1",
    "page": "Schelling\'s segregation model",
    "title": "Running the model",
    "category": "section",
    "text": "We can run each step of the function using the built-in step! function. This will update the agents and the model as defined by the agent_step! function.model = instantiate_model(numagents=200, griddims=(20,20), min_to_be_happy=2)\r\nstep!(agent_step!, model)  # run the model one step or\r\nstep!(agent_step!, model, 3)  # run the model multiple (3) steps"
},

{
    "location": "schelling/#Running-the-model-and-collecting-data-1",
    "page": "Schelling\'s segregation model",
    "title": "Running the model and collecting data",
    "category": "section",
    "text": "There is however a more efficient way to run the model and collect data. We can use the same step! function with more arguments to run multiple steps and collect values of our desired fields from every agent and put these data in a DataFrame object.model = instantiate_model(numagents=200, griddims=(20,20), min_to_be_happy=2)\r\nagent_properties = [:pos, :mood, :group]\r\nsteps_to_collect_data = collect(1:4)\r\ndata = step!(agent_step!, model, 4, agent_properties, steps_to_collect_data)juliaagent_properties is an array of Symbols for the agent fields that we want to collect. steps_to_collect_data specifies at which steps data should be collected."
},

{
    "location": "schelling/#Visualizing-the-data-1",
    "page": "Schelling\'s segregation model",
    "title": "Visualizing the data",
    "category": "section",
    "text": "We can use the visualize_2D_agent_distribution function to plot the distribution of agents on a 2D grid at every generation (Fig. 1):for i in 1:4\r\n visualize_2D_agent_distribution(data, model, Symbol(\"pos_$i\"), types=Symbol(\"group_$i\"), savename=\"step_$i\", cc=Dict(0=>\"blue\", 1=>\"red\"))\r\nendThe first and second arguments of the visualize_2D_agent_distribution are the data and the model objects. The third argument is the column name in data that has the position of each agent. The fourth argument is the column name in data that stores agents\'  groups. savename is the name of the plot file. cc is a dictionary that defines the colors of each agent group."
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
    "text": "Agents.jl structures simulations in three components. A model component that keeps all model-level variables and data, an agent component that keeps all agent-level variables and data, and space component that keeps space-level data.At the beginning of each building any model, define your types for each of these components. After that, you will have to initialize your model, and write one or two functions to change angets and/or the model at each step. This will be all before you can run your model and analyze its results.Now let\'s build our three types of this model:These types should be subtypes of the following abstract types:The agent type should be a subtype of AbstractAgent.\nThe model type should be a subtype of AbstractModel.\nThe space type should be a subtype of AbstractSpace.This subtyping will allow all the built-in functions to work on your define types.using Agents\r\n\r\n# 1. define agent type\r\nmutable struct MyAgent{T<:Integer} <: AbstractAgent\r\n  id::T\r\n  pos::Tuple{T, T}  # x,y coords\r\n  wealth::T\r\nendThe agent type has to have the id and the pos (for position) fields, but it can have any other fields that you desire. Here we add a wealth field that accepts integers. If your space is a grid, the position should accept a Tuple{Integer, Integer} representing x, y coordinates.# 2. define a model type\r\nmutable struct MyModel{T<:AbstractVector} <: AbstractModel\r\n  agents::T  # an array of agents\r\n  scheduler::Function\r\nendThe model type has to have the space, agents, and scheduler fields. space will keep our space type, agents will be an array of all the agents, and scheduler will hold a function that specifies the order at which agents activate at each generation. See Scheduler functions for available scheduler functions, and Space functions for available space structures.Since for this first step, we do not need a space structure, we will not define a space type and not create field for it in the model struct.Now we write a function to instantiate the model:# 3. instantiate the model\r\nfunction instantiate_model(;numagents)\r\n  agents = [MyAgent(i, (1,1), 1) for i in 1:numagents]  # create a list of agents\r\n  model = MyModel(agents, random_activation)  # instantiate the model\r\n  return model\r\nendWe can start our model by running the function:model = instantiate_model(numagents=100)Now we have to write a step function for agents. An step function should always take two positional arguments: first an agent object, and second your model object. Every agent will perform actions within this function at each step. Here, we say if an agent activate (defined by the scheduler), and has any wealth, it should choose a random agent and give one unit of its wealth to it.# Agent step function: define what the agent does at each step\r\nfunction agent_step!(agent::AbstractAgent, model::AbstractModel)\r\n  if agent.wealth == 0\r\n    return\r\n  else\r\n    agent2 = model.agents[rand(1:nagents(model))]\r\n    agent.wealth -= 1\r\n    agent2.wealth += 1\r\n  end\r\nendThat\'s it. We can run the model. The step! function (see Model functions) runs the model. We can run it without collecting data for one step:step!(agent_step!, model)or for multiple steps:step!(agent_step!, model, 10)or we can run it for multiple steps and collect data:agent_properties = [:wealth]\r\nsteps_to_collect_data = collect(1:10)\r\ndata = step!(agent_step!, model, 10, agent_properties, steps_to_collect_data)This code collects all agents\' wealth at each step and stores them in a DataFrame.  We can then interactively plot the data in DataVoyager and see the distribution of wealth at each stepvisualize_data(data)Often, in ABM we want to run a model many times and observe the average behavior of the system. We can do this easily with the batchrunner function. It accepts the same arguments and in the same order as the step! function:model = instantiate_model(numagents=100)\r\ndata = batchrunner(agent_step!, model, 10, agent_properties, steps_to_collect_data, 10)We can include a grid in our model and let the agents interact only with those in the same node. To that end, we will have to modify the model type and write a space type:# Add grid field to the model type\r\nmutable struct MyModel2{T<:AbstractSpace, Y<:AbstractVector} <: AbstractModel\r\n  space::T\r\n  agents::Y  # an array of agents\r\n  scheduler::Function\r\nend\r\n\r\n# define a space type\r\nmutable struct MyGrid{T<:Integer, Y<:AbstractVector} <: AbstractSpace\r\n  dimensions::Tuple{T, T}\r\n  space::SimpleGraph\r\n  agent_positions::Y  # an array of arrays for each grid node\r\nendThe space type has to have the dimensions, space, and agent_positions fields. dimensions should be there only if you are using a grid space. The space field keeps the actual graph of the space. The agent_positions is always an array of arrays. An array for each node of the space. It will be used to keep the agent.ids of agents in each node.We also have to modify the model instantiation function:function instantiate_model(;numagents, griddims)\r\n  agent_positions = [Int64[] for i in 1:gridsize(griddims)]  # an array of arrays for each node of the space\r\n  mygrid = MyGrid(griddims, grid(griddims), agent_positions)  # instantiate the grid structure\r\n  model = MyModel2(mygrid, MyAgent[], random_activation)  # instantiate the model\r\n  agents = [MyAgent(i, (1,1), 1) for i in 1:numagents]  # create a list of agents\r\n  for ag in agents\r\n    add_agent!(ag, model)\r\n  end\r\n  return model\r\nend\r\n\r\nmodel = instantiate_model(numagents=100, griddims=(5,5))We should now add agents to random positions on the grid. The move_agent!  function updates the agent_positions field of model.space and the pos field of each agent. It is possible to add agents to specific nodes by specifying a node number of x,y,z coordinates (see Space functions for more details).for agent in model.agents\r\n  move_agent!(agent, model)\r\nendWe need a new step function that allows agents to give money only to other agents in the same cell:function agent_step!(agent::AbstractAgent, model::AbstractModel)\r\n  if agent.wealth == 0\r\n    return\r\n  else\r\n    agent2 = model.agents[rand(1:nagents(model))]\r\n    agent.wealth -= 1\r\n    agent2.wealth += 1\r\n  end\r\nendThe model can be run as we did previously."
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
    "text": "The model is defined as a cellular automaton on a grid with Ld cells. L is the side length of the grid and d is its dimension. A cell can be empty, occupied by a tree, or burning. The model of Drossel and Schwabl (1992) is defined by four rules which are executed simultaneously: A burning cell turns into an empty cell\nA tree will burn if at least one neighbor is burning\nA tree ignites with probability f even if no neighbor is burning\nAn empty space fills with a tree with probability pThe above explanation is from Wikipedia. Given that, we can build our model.The complete code of this example is in the examples/forest_fire.jl file on the Github repository.As usual, we define the agent, model, and space types. using Agents\nusing Random\n\nmutable struct Tree{T<:Integer} <: AbstractAgent\n  id::T\n  pos::Tuple{T, T}\n  status::Bool  # true is green and false is burning\nend\n\nmutable struct Forest{T<:AbstractSpace, Y<:AbstractVector, Z<:AbstractFloat} <: AbstractModel\n  space::T\n  agents::Y\n  scheduler::Function\n  f::Z  # probability that a tree will ignite\n  d::Z  # forest density\n  p::Z  # probability that a tree will grow in an empty space\nend\n\nmutable struct MyGrid{T<:Integer, Y<:AbstractVector} <: AbstractSpace\n  dimensions::Tuple{T, T}\n  space::SimpleGraph\n  agent_positions::Y  # an array of arrays for each grid node\nend\nThe agent type Tree has three fields: id and pos, which have to be there for any model, and a status field that we introduce for this specific mode. The status field will hold true for a green tree and false for a burning one. All model parameters go to the model type Forest in addition to the compulsory space, agents, and scheduler fields. The space type has the three minimum fields.We can now instantiate the model. It is a good idea to put the instantiate lines in a function so that it will be easy to restart the model and change its parameters.:function model_initiation(;f, d, p, griddims, seed)\n  Random.seed!(seed)\n  # initialize the model\n  # we start the model without creating the agents first\n  agent_positions = [Array{Integer}(undef, 0) for i in 1:gridsize(griddims)]\n  mygrid = MyGrid(griddims, grid(griddims, false, true), agent_positions)  # create a 2D grid where each node is connected to at most 8 neighbors.\n  forest = Forest(mygrid, Array{Tree}(undef, 0), random_activation, f, d, p)\n\n  # create and add trees to each node with probability d, which determines the density of the forest\n  for node in 1:gridsize(forest.space.dimensions)\n    pp = rand()\n    if pp <= forest.d\n      tree = Tree(node, (1,1), true)\n      add_agent!(tree, node, forest)\n    end\n  end\n  return forest\nendNote that to keep the simulation results repeatable, we include Random.seed!(seed), so that the random number generator start from the same position everytime.We should now make a step function. It maybe easier to randomly go through every node on the grid and decide what happens to the node depending on its state. If its empty, add a tree with probability p, if it has a burning tree, remove it from the node, and if it has a green tree with a burning neighbor, burn the tree. Doing this requires a step function for the model, not every single agent. A model step function only accepts a model type as its argument.function forest_step!(forest)\n  shuffled_nodes = shuffle(1:gridsize(forest.space.dimensions))\n  for node in shuffled_nodes  # randomly go through the cells and \n    if length(forest.space.agent_positions[node]) == 0  # the cell is empty, maybe a tree grows here?\n      p = rand()\n      if p <= forest.p\n        treeid = forest.agents[end].id +1\n        tree = Tree(treeid, (1,1), true)\n        add_agent!(tree, node, forest)\n      end\n    else\n      treeid = forest.space.agent_positions[node][1]  # id of the tree on this cell\n      tree = id_to_agent(treeid, forest)  # the tree on this cell\n      if tree.status == false  # if it is has been burning, remove it.\n        kill_agent!(tree, forest)\n      else\n        f = rand()\n        if f <= forest.f  # the tree ignites on fire\n          tree.status = false\n        else  # if any neighbor is on fire, set this tree on fire too\n          neighbor_cells = node_neighbors(tree, forest)\n          for cell in neighbor_cells\n            treeid = get_node_contents(cell, forest)\n            if length(treeid) != 0  # the cell is not empty\n              treen = id_to_agent(treeid[1], forest)\n              if treen.status == false\n                tree.status = false\n                break\n              end\n            end\n          end\n        end\n      end\n    end\n  end\nend\nThat is all before we run the model. Because an agent step function is necessary for the built-in step! method, we use a dummy agent step function (dummystep) that accepts two arguments (one for the agent object and one for the model object).# create the model\nforest = model_initiation(f=0.1, d=0.8, p=0.1, griddims=(20, 20), seed=2)\n\n# choose which agent properties you want to collect\nagent_properties = [:status]\n\n# what functions to apply to the chosen agent properties before collecting them. `length` will show the number of trees and `count` the number of green trees.\naggregators = [length, count]\n\n# at which steps to collect the data\nsteps_to_collect_data = collect(1:100)\n\n# Run the model for 100 steps\ndata = step!(dummystep, forest_step!, forest, 100, agent_properties, aggregators, steps_to_collect_data)\n\n# explore data visually\nvisualize_data(data)Alternatively, collect agent positions and plot them on a 2D gridforest = model_initiation(f=0.05, d=0.8, p=0.01, griddims=(20, 20), seed=2)\ndata = step!(dummystep, forest_step!, forest, 10, agent_properties, collect(1:10))\nfor i in 1:10\n  visualize_2D_agent_distribution(data, forest, Symbol(\"pos_$i\"), types=Symbol(\"status_$i\"), savename=\"step_$i\", cc=Dict(true=>\"green\", false=>\"red\"))\nendStep 1(Image: )Step 2(Image: )Step 3(Image: )# Optionally Run batch simulation\ndata = batchrunner(dummystep, forest_step!, forest, 10, agent_properties, aggregators, steps_to_collect_data, 10)\n\n# And write the results to file\nwrite_to_file(df=data, filename=\"forest_model.csv\")"
},

{
    "location": "CA/#",
    "page": "Cellular Automata",
    "title": "Cellular Automata",
    "category": "page",
    "text": ""
},

{
    "location": "CA/#Cellular-automata-1",
    "page": "Cellular Automata",
    "title": "Cellular automata",
    "category": "section",
    "text": "Building cellular automata (CA) with Agents.jl is straightforward. Since CA have been studied extensively,  Agents.jl provides modules for building and visualizing one- and two-dimensional CA. The following is an example of building Wolfram\'s rule 22.using Agents\r\nusing Agents.CA1D\r\n# Define the rule\r\nrules = Dict(\"111\"=>\"0\", \"110\"=>\"0\", \"101\"=>\"0\", \"100\"=>\"1\", \"011\"=>\"0\", \"010\"=>\"1\", \"001\"=>\"1\", \"000\"=>\"0\")  # rule 22\r\n\r\n# Build the model\r\nmodel = CA1D.build_model(rules=rules, ncols=101)  # creates a model where all columns are \"0\"\r\n# change one cell\'s status:\r\nmodel.agents[50].status=\"1\"\r\n\r\n# Run the model, collect data, and visualize it \r\nruns = 100\r\nCA1D.ca_run(model, runs)And the following is an example of 2D CA implementing Conway\'s game of life:using Agents\r\nusing Agents.CA2D\r\n\r\n# Define the rule\r\nrules = (2,3,3)\r\n\r\n# Build the model\r\nmodel = CA2D.build_model(rules=rules, \r\n dims=(100, 100), Moore=true)\r\n# make some random cells alive\r\nfor i in 1:gridsize(model.space.dimensions)\r\n if rand() < 0.05\r\n  model.agents[i].status=\"1\"\r\n end\r\nend\r\n\r\n# Run the model, collect data, and visualize them \r\nruns = 50\r\nCA2D.ca_run(model, runs)Rules of a 2D cellular automaton in the CA2D module follow DSR (Death, Survival, Reproduction). Cells die if the number of their living neighbors are <D, survive if the number of their living neighbors are <=S, come to life if their living neighbors are as many as R."
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
    "text": "as_added(model::AbstractModel)\n\nActivates agents at each step in the same order as they have been added to the model.\n\n\n\n\n\n"
},

{
    "location": "builtin_functions/#Agents.random_activation",
    "page": "Built-in funtions",
    "title": "Agents.random_activation",
    "category": "function",
    "text": "random_activation(model::AbstractModel)\n\nActivates agents once per step in a random order.\n\n\n\n\n\n"
},

{
    "location": "builtin_functions/#Agents.partial_activation",
    "page": "Built-in funtions",
    "title": "Agents.partial_activation",
    "category": "function",
    "text": "partial_activation(model::AbstractModel)\n\nAt each step, activates only activation_prob number of randomly chosen of individuals with a activation_prob probability. activation_prob should be a field in the model and between 0 and 1.\n\n\n\n\n\n"
},

{
    "location": "builtin_functions/#Scheduler-functions-1",
    "page": "Built-in funtions",
    "title": "Scheduler functions",
    "category": "section",
    "text": "as_added\r\nrandom_activation\r\npartial_activation"
},

{
    "location": "builtin_functions/#Agents.grid",
    "page": "Built-in funtions",
    "title": "Agents.grid",
    "category": "function",
    "text": "grid(x::Integer, y::Integer, z::Integer, periodic=false, Moore=false)\n\nReturn a grid based on its dimensions. x, y, and z are the dimensions of the grid. If all dimensions are 1, it will return a 0D space, where all agents are in the same position. If x is more than 1, but y and z are 1, it will return a 1D grid. If x and y are more than 1, and z=1, it will return a 2D regular grid.\n\nperiodic=true will create toroidal grids.\nMoore=true will return a regular grid in which each node is connected to its diagonal neighbors. If false, each node will only connect to its orthogonal neighbors.\n\n\n\n\n\ngrid(dims::Tuple{Integer, Integer, Integer}, periodic=false, Moore=false)\n\nReturn a grid based on its dimensions. x, y, and z are the dimensions of the grid. If all dimensions are 1, it will return a 0D space, where all agents are in the same position. If x is more than 1, but y and z are 1, it will return a 1D grid. If x and y are more than 1, and z=1, it will return a 2D regular grid.\n\nperiodic=true will create toroidal grids.\nMoore=true will return a regular grid in which each node is connected to its diagonal neighbors. If false, each node will only connect to its orthogonal neighbors.\n\n\n\n\n\ngrid(dims::Tuple{Integer, Integer}, periodic=false, Moore=false)\n\nReturn a grid based on its dimensions. x, y are the dimensions of the grid. If all dimensions are 1, it will return a 0D space, where all agents are in the same position. If x is more than 1, but y is 1, it will return a 1D grid.\n\nperiodic=true will create toroidal grids.\nMoore=true will return a regular grid in which each node is connected to its diagonal neighbors. If false, each node will only connect to its orthogonal neighbors.\n\n\n\n\n\n"
},

{
    "location": "builtin_functions/#Agents.gridsize",
    "page": "Built-in funtions",
    "title": "Agents.gridsize",
    "category": "function",
    "text": "gridsize(dims::Tuple{Integer, Integer, Integer})\n\nReturns the size of a grid with dimenstions dims.\n\n\n\n\n\ngridsize(dims::Tuple{Integer, Integer})\n\nReturns the size of a grid with dimenstions dims.\n\n\n\n\n\ngridsize(model::AbstractModel)\n\nReturns the size of the grid in the model\n\n\n\n\n\n"
},

{
    "location": "builtin_functions/#Agents.Node_iter",
    "page": "Built-in funtions",
    "title": "Agents.Node_iter",
    "category": "type",
    "text": "Node_iter(model::AbstractModel)\n\nAn iterator that returns node coordinates, if the graph is a grid, or otherwise node numbers, and the agents in each node.\n\n\n\n\n\n"
},

{
    "location": "builtin_functions/#Agents.add_agent!",
    "page": "Built-in funtions",
    "title": "Agents.add_agent!",
    "category": "function",
    "text": "add_agent!(agent::AbstractAgent, pos::Tuple{Integer, Integer, Integer}, model::AbstractModel)\n\nAdds the agent to the pos in the space and to the list of agents. pos is tuple of x, y, and z (only if its a 3D space) coordinates of the grid node. If pos is not given, the agent is added to a random position.\n\nThis function is for positioning agents on the grid for the first time.\n\n\n\n\n\nadd_agent!(agent::AbstractAgent, pos::Integer, model::AbstractModel)\n\nAdds the agent to the pos in the space and to the list of agents. pos is the node number of the space. If pos is not given, the agent is added to a random position.\n\nThis function is for positioning agents on the grid for the first time.\n\n\n\n\n\nadd_agent!(agent::AbstractAgent, model::AbstractModel)\n\nAdds agent to a random node in the space and to the agent to the list of agents. \n\nReturns the agent\'s new position.\n\n\n\n\n\n"
},

{
    "location": "builtin_functions/#Agents.move_agent!",
    "page": "Built-in funtions",
    "title": "Agents.move_agent!",
    "category": "function",
    "text": "move_agent!(agent::AbstractAgent, pos::Tuple, model::AbstractModel)\n\nAdds agentID to a new position in the grid and removes it from the old position. Also updates the agent to represent the new position. pos is tuple of x, y, z (only if its a 3D space) coordinates of the grid node. If pos is not given, the agent is moved to a random position on the grid. \n\n\n\n\n\nmove_agent!(agent::AbstractAgent, pos::Integer, model::AbstractModel)\n\nAdds agentID to a new position in the grid and removes it from the old position. Also updates the agent to represent the new position. pos is an integer showing the number of the node on the grid node. If pos is not given, the agent is moved to a random position on the grid.\n\n\n\n\n\n"
},

{
    "location": "builtin_functions/#Agents.add_agent_single!",
    "page": "Built-in funtions",
    "title": "Agents.add_agent_single!",
    "category": "function",
    "text": "add_agent_single!(agent::AbstractAgent, model::AbstractModel)\n\nAdds agent to a random node in the space while respecting a maximum one agent per node. It does not do anything if there are no empty nodes.\n\nReturns the agent\'s new position.\n\n\n\n\n\n"
},

{
    "location": "builtin_functions/#Agents.move_agent_single!",
    "page": "Built-in funtions",
    "title": "Agents.move_agent_single!",
    "category": "function",
    "text": "move_agent_single!(agent::AbstractAgent, model::AbstractModel)\n\nMoves agent to a random nodes on the grid while respecting a maximum of one agent per node. If there are no empty nodes, the agent wont move.\n\nReturn the agent\'s new position.\n\n\n\n\n\n"
},

{
    "location": "builtin_functions/#Agents.empty_nodes",
    "page": "Built-in funtions",
    "title": "Agents.empty_nodes",
    "category": "function",
    "text": "empty_nodes(model::AbstractArray)\n\nReturns true if there are empty nodes, otherwise returns false.\n\n\n\n\n\n"
},

{
    "location": "builtin_functions/#Agents.pick_empty",
    "page": "Built-in funtions",
    "title": "Agents.pick_empty",
    "category": "function",
    "text": "pick_empty(model)\n\nReturns the ID of a random empty cell. Returns 0 if there are no empty cells \n\n\n\n\n\n"
},

{
    "location": "builtin_functions/#Agents.find_empty_nodes_coords",
    "page": "Built-in funtions",
    "title": "Agents.find_empty_nodes_coords",
    "category": "function",
    "text": "find_empty_nodes_coords(model::AbstractModel)\n\nReturns the coordinates of empty nodes on the model grid.\n\n\n\n\n\n"
},

{
    "location": "builtin_functions/#Agents.find_empty_nodes",
    "page": "Built-in funtions",
    "title": "Agents.find_empty_nodes",
    "category": "function",
    "text": "find_empty_nodes(model::AbstractModel)\n\nReturns the IDs of empty nodes on the model space.\n\n\n\n\n\n"
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
    "text": "vertex_to_coord(vertex::Integer, model::AbstractModel)\n\nReturns the coordinates of a node given its number on the graph.\n\n\n\n\n\nvertex_to_coord(vertex::Integer, dims::Tuple{Integer, Integer, Integer})\n\nReturns the coordinates of a node given its number on a 3D grid.\n\n\n\n\n\nvertex_to_coord(vertex::Integer, dims::Tuple{Integer,Integer})\n\nReturns the coordinates of a node given its number on a 2D grid.\n\n\n\n\n\n"
},

{
    "location": "builtin_functions/#Agents.get_node_contents",
    "page": "Built-in funtions",
    "title": "Agents.get_node_contents",
    "category": "function",
    "text": "get_node_contents(agent::AbstractAgent, model::AbstractModel)\n\nReturns all agents\' ids in the same node as the agent.\n\n\n\n\n\nget_node_contents(coords::Tuple, model::AbstractModel)\n\nReturns the id of agents in the node at coords\n\n\n\n\n\nget_node_contents(node_number::Integer, model::AbstractModel)\n\nReturns the id of agents in the node at node_number\n\n\n\n\n\n"
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
    "text": "node_neighbors(agent::AbstractAgent, model::AbstractModel)\n\nReturns neighboring node coords/numbers of the node on which the agent resides. If agent pos is recorded an integer, the function will return node numbers of the neighbors. If the agent pos is a tuple, the function will return the coordinates of neighbors on a grid.\n\n\n\n\n\nnode_neighbors(node_number::Integer, model::AbstractModel)\n\nReturns neighboring node IDs of the node with node_number.\n\n\n\n\n\nnode_neighbors(node_coord::Tuple, model::AbstractModel)\n\nReturns neighboring node coords of the node with node_coord.\n\n\n\n\n\nnode_neighbors(node_number::Integer, model::AbstractModel, radius::Integer)\n\nReturns a list of neighboring cells to the node node_number within the radius.\n\n\n\n\n\n"
},

{
    "location": "builtin_functions/#Space-functions-1",
    "page": "Built-in funtions",
    "title": "Space functions",
    "category": "section",
    "text": "grid\r\ngridsize\r\nNode_iter\r\nadd_agent!\r\nmove_agent!\r\nadd_agent_single!\r\nmove_agent_single!\r\nempty_nodes\r\npick_empty\r\nfind_empty_nodes_coords\r\nfind_empty_nodes\r\ncoord_to_vertex\r\nvertex_to_coord\r\nget_node_contents\r\nid_to_agent\r\nnode_neighbors"
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
    "text": "step!(agent_step::Function, model::AbstractModel)\n\nUpdates agents one step. Agents will be updated as specified by the model.scheduler.\n\n\n\n\n\nstep!(agent_step::Function, model::AbstractModel, nsteps::Integer)\n\nRepeats the step function nsteps times without collecting data.\n\n\n\n\n\nstep!(agent_step::Function, model::AbstractModel, nsteps::Integer, agent_properties::Array{Symbol}, steps_to_collect_data::Array{Int64})\n\nRepeats the step function nsteps times, and collects all agent fields in agent_properties at steps steps_to_collect_data.\n\n\n\n\n\nstep!(agent_step::Function, model::AbstractModel, nsteps::Integer, agent_properties::Array{Symbol}, aggregators::Array, steps_to_collect_data::Array{Integer})\n\nRepeats the step function nsteps times, and applies functions in aggregators to values of agent fields in agent_properties at steps steps_to_collect_data.\n\n\n\n\n\nstep!(agent_step::Function, model::AbstractModel, nsteps::Integer, propagg::Dict, steps_to_collect_data::Array{Integer})\n\nRepeats the step function nsteps times, and applies functions in values of the propagg dict to its keys at steps steps_to_collect_data.\n\n\n\n\n\nstep!(agent_step::Function, model_step::Function, model::AbstractModel)\n\nUpdates agents one step without collecting data. This function accepts two functions, one for update agents and one for updating the whole model one after all the agents have been updated.\n\n\n\n\n\nstep!(agent_step::Function, model_step::Function, model::AbstractModel, nsteps::Integer)\n\nRepeats the step function nsteps times without collecting data.\n\n\n\n\n\nstep!(agent_step::Function, model_step::Function, model::AbstractModel, nsteps::Integer, agent_properties::Array{Symbol}, steps_to_collect_data::Array{Integer})\n\nRepeats the step function nsteps times, and collects all agent fields in agent_properties at steps steps_to_collect_data.\n\n\n\n\n\nstep!(agent_step::Function, model_step::Function, model::AbstractModel, nsteps::Integer, agent_properties::Array{Symbol}, aggregators::Array, steps_to_collect_data::Array{Integer})\n\nRepeats the step function nsteps times, and applies functions in aggregators to values of agent fields in agent_properties at steps steps_to_collect_data.\n\n\n\n\n\nstep!(agent_step::Function, model_step::Function, model::AbstractModel, nsteps::Integer, propagg::Dict, steps_to_collect_data::Array{Integer})\n\nRepeats the step function nsteps times, and applies functions in values of the propagg dict to its keys at steps steps_to_collect_data.\n\n\n\n\n\n"
},

{
    "location": "builtin_functions/#Model-functions-1",
    "page": "Built-in funtions",
    "title": "Model functions",
    "category": "section",
    "text": "nagents\r\nkill_agent!\r\nstep!"
},

{
    "location": "builtin_functions/#Agents.combine_columns!",
    "page": "Built-in funtions",
    "title": "Agents.combine_columns!",
    "category": "function",
    "text": "combine_columns(data::DataFrame, column_names::Array{Symbol}, aggregator::AbstractVector)\n\nCombines columns of the data that contain the same type of info from different steps of the model into one column using an aggregator, e.g. mean. You should either supply all column names that contain the same type of data, or one name (as a string) that precedes a number in different columns, e.g. \"pos_\"{some number}.\n\n\n\n\n\ncombine_columns!(data::DataFrame, column_base_name::String, aggregators::AbstractVector)\n\nCombines columns of the data that contain the same type of info from different steps of the model into one column using an aggregator, e.g. mean. You should either supply all column names that contain the same type of data, or one name (as a string) that precedes a number in different columns, e.g. \"pos_\"{some number}.\n\n\n\n\n\n"
},

{
    "location": "builtin_functions/#Agents.write_to_file",
    "page": "Built-in funtions",
    "title": "Agents.write_to_file",
    "category": "function",
    "text": "write_to_file(;df::DataFrame, filename::AbstractString)\n\nWrites a DataFrame to file.\n\n\n\n\n\n"
},

{
    "location": "builtin_functions/#Agents.data_collector",
    "page": "Built-in funtions",
    "title": "Agents.data_collector",
    "category": "function",
    "text": "data_collector(properties::Array{Symbol}, aggregators::Array, steps_to_collect_data::Array{Int64}, model::AbstractModel, step::Integer)\n\nUsed in the step! function.\n\n\n\n\n\ndata_collector(properties::Array{Symbol}, aggregators::Array, steps_to_collect_data::Array{Int64}, model::AbstractModel, step::Integer, df::DataFrame)\n\nUsed in the step! function.\n\n\n\n\n\ndata_collector(propagg::Dict, steps_to_collect_data::Array{Int64}, model::AbstractModel, step::Integer)\n\nUsed in the step! function.\n\n\n\n\n\ndata_collector(propagg::Dict, steps_to_collect_data::Array{Int64}, model::AbstractModel, step::Integer, df::DataFrame)\n\nUsed in the step! function.\n\n\n\n\n\ndata_collector(properties::Array{Symbol}, steps_to_collect_data::Array{Int64}, model::AbstractModel, step::Integer)\n\nUsed in the step! function.\n\n\n\n\n\ndata_collector(properties::Array{Symbol}, steps_to_collect_data::Array{Int64}, model::AbstractModel, step::Integer, df::DataFrame)\n\nUsed in the step! function.\n\n\n\n\n\n"
},

{
    "location": "builtin_functions/#Data-collectors-1",
    "page": "Built-in funtions",
    "title": "Data collectors",
    "category": "section",
    "text": "combine_columns!\r\nwrite_to_file\r\ndata_collector"
},

{
    "location": "builtin_functions/#Agents.batchrunner",
    "page": "Built-in funtions",
    "title": "Agents.batchrunner",
    "category": "function",
    "text": "batchrunner(agent_step, model_step, model::AbstractModel, nsteps::Integer, properties::Array{Symbol}, aggregators::AbstractVector{T}, steps_to_collect_data::Array{Int64}, replicates::Integer) where T<:Function\n\nRuns replicates number of simulation replicates and returns a DataFrame.\n\n\n\n\n\nbatchrunner(agent_step, model_step, model::AbstractModel, nsteps::Integer, properties::Array{Symbol}, steps_to_collect_data::Array{Int64}, replicates::Integer)\n\nRuns replicates number of simulation replicates and returns a DataFrame.\n\n\n\n\n\nbatchrunner(agent_step, model::AbstractModel, nsteps::Integer, properties::Array{Symbol}, aggregators::AbstractVector{T}, steps_to_collect_data::Array{Int64}, replicates::Integer) where T<:Function\n\nRuns replicates number of simulation replicates and returns a DataFrame.\n\n\n\n\n\nbatchrunner(agent_step, model::AbstractModel, nsteps::Integer, properties::Array{Symbol}, steps_to_collect_data::Array{Int64}, replicates::Integer)\n\nRuns replicates number of simulation replicates and returns a DataFrame.\n\n\n\n\n\nbatchrunner(agent_step!::U, model_step!::V, model::AbstractModel, nsteps::Integer, properties::Array{Symbol}, aggregators::AbstractVector{T}, steps_to_collect_data::AbstractArray{X}, replicates::Integer) where {T<:Function,U<:Function,V<:Function,X<:Integer}\n\n\n\n\n\n"
},

{
    "location": "builtin_functions/#Batch-runner-1",
    "page": "Built-in funtions",
    "title": "Batch runner",
    "category": "section",
    "text": "batchrunner"
},

{
    "location": "builtin_functions/#Visualization-functions-1",
    "page": "Built-in funtions",
    "title": "Visualization functions",
    "category": "section",
    "text": "agents_plots_complete\r\nvisualize_data\r\nvisualize_2D_agent_distribution\r\nvisualize_1DCA\r\nvisualize_2DCA"
},

]}
