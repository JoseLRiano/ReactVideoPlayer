import axios from 'axios';

const KEY = 'AIzaSyDv8bohGrZ2YCxG-z4Kh1X7P5IVoSHoxIU';

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
      part: 'snippet', 
      type: 'video',
      maxResults: 5,
      key: `${KEY}`
  }
})
