'use strict';

// FUNCTIONS //

var abs = Math.abs,
	exp = Math.exp,
	pow = Math.pow;


// MGF //

/**
* FUNCTION: mgf( x, mu, b )
*	Evaluates the moment-generating function (MGF) for a Laplace / Double Exponential distribution with location parameter `mu` and scale parameter `b` at a value `t`.
*
* @param {Number} t - input value
* @param {Number} mu - location parameter
* @param {Number} b - scale parameter
* @returns {Number} evaluated MGF
*/
function mgf( t, mu, b ) {
	var bt;
	if ( abs( t ) >= 1/b ) {
		return NaN;
	}
	bt = b * t;
	return exp( mu * t ) / ( 1 - pow( bt, 2 ) );
} // end FUNCTION mgf()


// EXPORTS //

module.exports = mgf;
