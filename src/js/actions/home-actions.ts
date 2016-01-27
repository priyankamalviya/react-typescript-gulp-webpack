import { dispatch } from "../dispatcher/app-dispatcher";

const
    citiesWeatherApi = "http://api.openweathermap.org/data/2.5/group",
    appId = "44db6a862fba0b067b1930da0d769e98";

export default {
    getCities() {
        dispatch({type: "home/cities"});

        $.getJSON("./data/city.list.json")
            .done((data: any) => {
                dispatch({type: "home/cities/success", cities: data.cities});
            })
            .fail(error => {
                dispatch({type: "home/cities/error", error});
            });
    },

    changeCities(selectedCityIds: string[]) {
        dispatch({type: "home/city/change", selectedCityIds});

        $.ajax(`${citiesWeatherApi}?id=${selectedCityIds.join(",")}&units=metric&appid=${appId}`, {crossDomain: true})
            .done((data: any) => {
                console.log(data);
                dispatch({type: "home/city/weather", weathers: data.list});
            });
    }
};
