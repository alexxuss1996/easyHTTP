/** 
* Easy HTTP
* Library for making http requests
*
* @version 2.0.0
* @author Brad Traversy
* @license MIT
*
**/

class easyHTTP {
	// GET METHOD
	get(url) {

		return new Promise((resolve, reject) => {
			fetch(url)
				.then(res => res.json())
				.then(data => resolve(data))
				.catch(err => reject(err));
		})
	}
	// POST METHOD
	post(url, data) {

		return new Promise((resolve, reject) => {
			fetch(url, {
				method: "POST",
				headers: {
					"Content-type": "application/json"
				},
				body: JSON.stringify(data)
				
			})
				.then(res => res.json())
				.then(data => resolve(data))
				.catch(err => reject(err));
		})
	}
	// PUT METHOD
	put(url, data) {

		return new Promise((resolve, reject) => {
			fetch(url, {
				method: "PUT",
				headers: {
					"Content-type": "application/json"
				},
				body: JSON.stringify(data)
				
			})
				.then(res => res.json())
				.then(data => resolve(data))
				.catch(err => reject(err));
		})
	}
	// DELETE METHOD
	delete(url) {

		return new Promise((resolve, reject) => {
			fetch(url, {
				method: "DELETE",
				headers: {
					"Content-type": "application/json"
				}
			})
				.then(res => res.json())
				.then(() => resolve("User deleted..."))
				.catch(err => reject(err));
		})
	}
}