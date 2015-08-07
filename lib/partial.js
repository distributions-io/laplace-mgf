'use strict';

// FUNCTIONS //

var abs = Math.abs,
	exp = Math.exp,
	pow = Math.pow;


// PARTIAL //

/**
* FUNCTION: partial( mu, b )
*	Partially applies location parameter `mu` and scale parameter `b` and returns a function for evaluating the moment-generating function (MGF) for a Laplace / Double Exponential distribution.
*
* @param {Number} mu - location parameter
* @param {Number} b - scale parameter
* @returns {Function} MGF
*/
function partial( mu, b ) {

	/**
	* FUNCTION: mgf( t )
	*	Evaluates the moment-generating function (MGF) for a Laplace / Double Exponential distribution.
	*
	* @private
	* @param {Number} t - input value
	* @returns {Number} evaluated MGF
	*/
	return function mgf( t ) {
		var bt;
		if ( abs( t ) >= 1/b ) {
			return NaN;
		}
		bt = b * t;
		return exp( mu * t ) / ( 1 - pow( bt, 2 ) );
	};
} // end FUNCTION partial()


// EXPORTS //

module.exports = partial;
