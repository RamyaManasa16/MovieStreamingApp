import axios from "axios";

const FetchApi =  {
    getLatestData: async () => {
        try {
            const res = await axios.get("https://api.themoviedb.org/3/movie/popular?api_key=4e44d9029b1270a757cddc766a1bcb63&language=en-US")
            return res.data.results;
        } catch (err: any) {
            return err;
        }
    },
    getParticularData : async () => {
        try {
            const res = await axios.get("https://api.themoviedb.org/3/movie/popular?api_key=4e44d9029b1270a757cddc766a1bcb63&language=en-US")
            return res.data.results;
        } catch (err: any) {
            return err;
        }
    }
}
export default FetchApi;