import axios from "axios";

export default {
    // Get top 10 current trends from Twitter Trends API based upon search parameters
    getTrends: function(data) {
        return axios.get("/api/home", data);
    },
    // Get all saved trend/articles from the database 
    getTrend: function(id) {
        return axios.get("/api/saved/" + id);
    },
    // Saves a trend/article to the database
    createTrend: function(bookData) {
        console.log(bookData);
        return axios.post("/api/home", bookData);
    },
    // Delete a trend/article from the database
    deleteTrend: function(id) {
        return axios.delete("/api/saved/" + id);
    }
};