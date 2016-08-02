/*
	to do
- [ ]		demes - demes allow the population of a GA to be broken up into smaller chunks that have limited communication with each other. Of course, shrinking the population that can interact will increase the selection pressure, but demes also lets the subpopulations explore the function space independently. Demes can also be used to vary the parameter settings of the GA on a per-deme basis.
- [ ]		parameter sweeps - Parameter sweeps let an experiment run automatically over a range of parameter settings. This is important for real experimental setups.
- [ ]		web worker - The working code of the GA is sectioned off into a web worker. This will allow long running evaluation functions without creating error messages in the UI about scripts.
- [ ]		choice of crossover operators - The GA literature has explored many different crossover operators beyond one-point crossover.
- [ ]		choice of selection operators - The GA literature has explored many different selection operators besides roulette wheel selection.
- [ ]		tabbed interface - A tabbed interface can simplify the UI and segment the many parameters into related topics.
- [ ]		press button in interface to load new problem or parameter set 
- [ ]		save/load parameters to json files
- [ ]		charts in UI
- [ ]		noise in evaluation function - a way to increase problem difficulty and model real-world issues
- [ ]		drift in problem fitness space- a way to increase problem difficulty and model real-world issues
- [ ]		tabu search ( no revisiting the same arrangement, every individual must be unique - use hashes)
- [ ]		binInt
- [ ]			Gray Code
- [ ]		deceptive
- [ ]		other test suite functions
- [ ]		TSP
- [ ]		json journaling for later analysis, reproducibility
- [ ]		genotype statistics
- [ ]		EDA
		
- [ ]		salting initial population with building blocks
- [ ]		rearrangement of genes to reduce  bb length
- [ ]		rearrangement of genes to increse bb length
*/
