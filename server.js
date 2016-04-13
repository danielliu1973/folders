'use strict';
var fs = require('fs'),
    path = require('path');

var srcpath = '.';
var C = {};

// fs.readdir(srcpath, function(err, items) {
// 	console.log(items);
//     items.map(function(item,i) {
//         if(fs.statSync(item).isDirectory() && item.includes('folder')){
//         	fs.readdir(item, function(err, c) {
// 	    		C[item] = c;
// 	    		console.log(C);
// 	    	});	
//         }
//     });
// });

// function read(s){
// 	// return Promise.promisify()
// 	return new Promise(function(resolve, reject){
// 		fs.readdir( s, function( error, data ) {
// 	        if ( error ) {
// 	            reject( error );
// 	        } else {
// 	            resolve( data );
// 	        }
// 	    });
// 	});
// };

// read(srcpath)
// .then(
// 	function (items) {
// 	    items.map(function(item,i) {
// 	        if(fs.statSync(item).isDirectory() && item.includes('folder')){
// 	        	read(item)
// 	        	.then(
// 	        		function(c){
// 	        	  		C[item] = c;
// 		    			console.log(c);
// 	        		},
// 	        		function(e){
	        	  
// 	        		}
// 	        	);
// 	        }
// 	    });
// 	    console.log('end!!end');
// 	},
// 	function(error){

// 	}
// )
// .then(
// 	function(c){
// 		console.log('end!!');
// 	},
// 	function(e){
  
// 	}
// )
fs.readdirSync(srcpath).map(function(item,i) {
	if(fs.statSync(item).isDirectory() && item.includes('folder')){
		fs.readdirSync(item).map(function(p,i){
			C[p] = !!!C[p] ? 1 : C[p] + 1;
		});
	}
});
for(var pp in C){
	console.log(pp + ':' + C[pp])
}