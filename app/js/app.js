const http = new easyHTTP;


// GET Posts
//  http.get("https://jsonplaceholder.typicode.com/posts",
//   function(err, response){
// 		if (err) {
// 			console.log(err)
// 		} else {
// 			console.log(response);

// 		}
//  });

// Create data
const data = {
	title: "Custom post",
	body: "This is custom post"
}
	// Create post
//  http.post("https://jsonplaceholder.typicode.com/posts/", data,
//  function(err, response){
// 	 if (err) {
// 		 console.log(err)
// 	 } else {
// 		 console.log(response);

// 	 }
// });

// Update post
// http.put("https://jsonplaceholder.typicode.com/posts/3", data,
// function(err, response){
// 	if (err) {
// 		console.log(err)
// 	} else {
// 		console.log(response);

// 	}
// });

// Delete post
//  http.delete("https://jsonplaceholder.typicode.com/posts/3",
//   function(err, response){
// 		if (err) {
// 			console.log(err)
// 		} else {
// 			console.log(response);

// 		}
//  });