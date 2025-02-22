// Challenge 4: Async Programming
// Create an async function that simulates fetching user data from multiple APIs.
// The function should fetch a user's profile, their posts, and their followers
// in parallel, but should fail if any request takes longer than 3 seconds.
// Use the provided mock API functions:
// - fetchUserProfile(userId)
// - fetchUserPosts(userId)
// - fetchUserFollowers(userId)
// Return an object combining all the user's data.
// Handle any potential errors appropriately.

async function fetchUserData(userId) {
    async function fetchWithTimeout(fn, id, timeout = 3000) {
        return new Promise((resolve, reject) => {
            let isResolved = false;

            // Call the API function
            fn(id).then(data => {
                if (!isResolved) {
                    isResolved = true;
                    resolve(data);
                }
            }).catch(reject);

            // Set a timeout for failure
            setTimeout(() => {
                if (!isResolved) {
                    isResolved = true;
                    reject(new Error("Request timeout"));
                }
            }, timeout);
        });
    }

    try {
        const profile = await fetchWithTimeout(fetchUserProfile, userId);
        const posts = await fetchWithTimeout(fetchUserPosts, userId);
        const followers = await fetchWithTimeout(fetchUserFollowers, userId);

        return { profile, posts, followers };
    } catch (error) {
        console.log("Error fetching user data:", error);
        return null;
    }
}

// Mock API functions
async function fetchUserProfile(userId) {
    return new Promise(resolve => setTimeout(() => resolve({ id: userId, name: "John Doe" }), 1000));
}

async function fetchUserPosts(userId) {
    return new Promise(resolve => setTimeout(() => resolve(["Post 1", "Post 2"]), 1500));
}

async function fetchUserFollowers(userId) {
    return new Promise(resolve => setTimeout(() => resolve(["Follower 1", "Follower 2"]), 2000));
}

// Test Challenge 4
fetchUserData(1).then(data => console.log(data));
