import conditionCard from "./components/ConditionCard.js";


new Vue ({
    el: "#current-condition",
    components: {
        'current-condtion-card': conditionCard
    },
    data: {
        currentWeather: {},
        date: "",
        sunriseTime: "",
        sunsetTime: "",
        windSpeed: 0,
        cloudiness: 0
    },
    mounted: function () {
        this.getCurrentData();       
    },
    watch: {
        currentWeather: function (newData, oldData) {
            console.log(this.currentWeather);
            this.date = timeConverter(this.currentWeather.dt, true);
            this.sunriseTime = timeConverter(this.currentWeather.sys.sunrise, false);
            this.sunsetTime = timeConverter(this.currentWeather.sys.sunset, false);
            this.windSpeed = this.currentWeather.wind.speed;
            this.cloudiness = this.currentWeather.clouds.all;
        }
    },
    methods: {
        getCurrentData: function () {
            axios.get('https://api.openweathermap.org/data/2.5/weather?q=saigon,vn&units=metric&APPID=b5ad7de37c0132a11c568f7488a50a1c')
                .then(response => {
                    this.currentWeather = response.data;
                    
                })
                .catch(error => this.answer = 'Error! Could not reach the API. ' + error);
        },
        showData: function () {
            console.log("abc");
            this.count++;
        
            console.log(this.currentWeather);
        }
            
    }
})

function timeConverter(UNIX_timestamp, fullDate){
    var a = new Date(UNIX_timestamp * 1000);
    var months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    var days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    var year = a.getFullYear();
    var month = months[a.getMonth()];
    var day = days[a.getDay()];
    var date = a.getDate();
    var hour = a.getHours();
    var min = a.getMinutes();
    var sec = a.getSeconds();

    if (hour < 12) {
        hour = '0' + hour;
    }
    if (min < 10) {
        min = '0' + min;
    }

    if (fullDate) {
        var fullTime = day + ', ' + date + ' ' + month + ' ' + year + ' '  + hour + ':' + min;
    return fullTime;
    } else {
        var timeOnly = hour + ':' + min;
        return timeOnly;
    }
    
  }