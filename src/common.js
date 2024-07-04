import axios from 'axios';


const detectRequest = async (method, url, data) => {
  const params = {method, url}
  if (data) { params.data = data; }
  Event.$emit('set-loader', true);
  let response = await axios( params ).then( data => {
    Event.$emit('set-loader', false);
    return data;
  }).catch((e) => {
    Event.$emit('set-loader', false);
    return e.response;
  });

//   console.log(response, "=-==--=-=");
//   if (response.status === 409) {
//     return;
//   }

  if (response.status === 200) {
    return response.data ? response.data : true;
  }

  return response.status;
}

const createEvent = async (name, method) => {
    Event.$on( name, method );
}

const methods = {
    dateDistance: function(end) {
        const now = new Date().getTime();
        const distance = new Date(end).getTime() - now;
    
        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    
        return { days, hours, minutes }; 
    },
    timeSince: function(date) {
        console.log(date);
        var seconds = Math.floor((new Date() - date) / 1000);
        var interval = seconds / 31536000;
        if (interval > 1) {
            return Math.floor(interval) + " years";
        }
        interval = seconds / 2592000;
        if (interval > 1) {
            return Math.floor(interval) + " months";
        }
        interval = seconds / 86400;
        if (interval > 1) {
            return Math.floor(interval) + " days";
        }
        interval = seconds / 3600;
        if (interval > 1) {
            return Math.floor(interval) + " hours";
        }
        interval = seconds / 60;
        if (interval > 1) {
            return Math.floor(interval) + " minutes";
        }

        return Math.floor(seconds) + " seconds";
    },
    getLessonRoute: function(path) {
        if(path == 'boxed') {
            return 'boxed';
        } 
        else if(path == 'intro') {
            return 'intro';
        } 
        else if(path == 'review') {
            return 'review';
        } 
        else if(path == 'hold') {
            return 'hold';
        }
        else if(path == 'pool') {
            return 'pool-game';
        }
        else if(path == 'video') {
            return 'video'
        } else if (path == 'floppy') {
            return 'floppy-bird'
        } else if (path == 'ninja') {
            return 'fruit-ninja'
        }
    }
}

export {
  detectRequest,
  createEvent,
  methods
};