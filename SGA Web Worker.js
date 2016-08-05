
// Allocate arrays for population level resources.
var pop;
var fitness;
var popSize;
var indSize;
var maxEval;
var mutationRate;
var tournamentSize;
var maxBirths;
var maxDeaths;
var reportEvery;
var maxRuns;
var maxReporting;

self.onmessage = function(e) {
  console.log('Message received from main script');
  var workerResult = 'Result: ' + (e.data[0] * e.data[1]);
  console.log('Posting message back to main script');
  postMessage(workerResult);
}

function simpleGA(){
	var runs,r;
	// Get parameters from the form on the host web page.
	runs = new Array(maxRuns);
	for( r=0; r<maxRuns; r++ ){
	
	var i;
	pop = new Array();
	fitness = new Array();
	//myResults.innerHTML ="";
	
	if (maxReporting > 0 ){
	// Print out the parameters for debugging purposes.
	myConsole.innerHTML +="P "+ popSize+ " G "+ indSize;
	myConsole.innerHTML +=" M "+ maxTime;
	myConsole.innerHTML +=" R "+ mutationRate+ "<br/>";
	}
	
	// Initialize the population.
	for (i = 0; i < popSize; i++) {
		ind = new Array(indSize)
		for (j = 0; j < ind.length; j++) {
			ind[j] = Math.round(Math.random());
			
		}
		fitness[i] = evaluate(ind);
		if (maxReporting > 2 ) myResults.innerHTML +=" E "+i+" "+fitness[i]+"<br/>";
		pop[i] = ind;
	}
	statistics();
	
	// Run the GA for the maximum number of evaluations.
	t=0;
	while( t < (maxEval)) {
			for (var i = 0; i < maxBirths; i++) {
				birth(tournamentSize, indSize, mutationRate);
				t++;
			}
			for (var i = 0; i < maxDeaths; i++) {
				death(tournamentSize);
			}
			if ( t % reportEvery == 0) statistics();
			myConsole.innerHTML +=" R "+ r+ " "+t+"<br/>";
	}
	run_statistics(runs, r);
	}
	run_final_statistics(runs);

}

function birth( tournamentSize, indSize, mutationRate )
{
var p1, p2;
// tournament selection
	p1 = winner(tournamentSize); 
	p2 = winner(tournamentSize);

// uniform crossover - weighted random preference
	var newInd = new Array(indSize);
	for (j = 0; j<ind.length; j++)
	{
	if ( fitness[p1]*Math.random()  > fitness[p2]*Math.random() )
		{
		newBit = pop[p1][j];
		}
		else 
		{
		newBit = pop[p2][j];
		}
	if (Math.random() < mutationRate) 
		{
		newBit = not(newBit);
		}
	newInd[j] = newBit; 
	}
	pop.push( newInd );
	fitness.push( evaluate( newInd ) );
}

function death( tournamentSize )
{
	p3 = loser(tournamentSize);
	pop.splice( p3, 1 );
	fitness.splice( p3, 1 );
}

function winner( n )
{
var i;
best=0
f_best = 0
for ( i=0; i<n; i++ )
{
	p = Math.round( Math.random() * pop.length-0.5 );
	if ( fitness[p]>f_best )
	{
	best = p;
	f_best = fitness[p];
	}
}
return best;
}

function loser( n )
{
var i;
worst =0
f_worst = 9999
for ( i=0; i<n; i++ )
{
	p = Math.round( Math.random() * pop.length-0.5 );
	if ( fitness[p]<f_worst )
	{
	worst = p;
	f_worst = fitness[p];
	}

}
return worst;
}

function not( bit )
{
if ( bit==0 )
{
	return 1;
}
else
{
	return 0;
}
}

function evaluate( ind ) 
{
// eventually, just call the function provided as a parameter
return maxones(ind);
}

function maxones(ind){
	var c;
	var count = 0;
	for (c = 0; c < ind.length; c++) {
		if (ind[c] == 1) {
			count++;
		}
	}
	return count;
}

function statistics()
{
var i=0;
var best = 0;
var f_best = 0;
var worst = 0;
var f_worst = 9999;
var sum = 0;
var avg = 0;

for ( i=0; i<fitness.length; i++ )
{
	if ( fitness[i]>f_best )
	{
	best = i;
	f_best = fitness[i];
	}
	if ( fitness[i]<f_worst )
	{
	worst = i;
	f_worst = fitness[i];
	}
	sum += fitness[i];
}
avg = sum/(fitness.length);

myResults.innerHTML +="Pop size "+ pop.length+ "worst=" + f_worst+" avg="+avg+ " best="+ f_best+ "<br/>";
}

function run_statistics(runs, r)
{
var i=0;
var best = 0;
var f_best = 0;
var worst = 0;
var f_worst = 9999;
var sum = 0;
var avg = 0;

for ( i=0; i<fitness.length; i++ )
{
	if ( fitness[i]>f_best )
	{
	best = i;
	f_best = fitness[i];
	}
	if ( fitness[i]<f_worst )
	{
	worst = i;
	f_worst = fitness[i];
	}
	sum += fitness[i];
}
avg = sum/(fitness.length);

runs[r]=f_best;
myResults.innerHTML += r+" Run iterations "+ runs.length+ "worst=" + f_worst+" avg="+avg+ " best="+ f_best+ "<br/>";
}

function run_final_statistics(runs)
{
var i=0;
var best = 0;
var f_best = 0;
var worst = 0;
var f_worst = 9999;
var sum = 0;
var avg = 0;

for ( i=0; i<runs.length; i++ )
{
	if ( runs[i]>f_best )
	{
	best = i;
	f_best = runs[i];
	}
	if ( runs[i]<f_worst )
	{
	worst = i;
	f_worst = runs[i];
	}
	sum += runs[i];
}
avg = sum/(runs.length);

myResults.innerHTML +="Run iterations "+ runs.length+ "worst=" + f_worst+" avg="+avg+ " best="+ f_best+ "<br/>";
}
