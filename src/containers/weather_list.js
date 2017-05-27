import React, { Component } from 'react';
import { connect } from 'react-redux';
import Chart from '../components/chart';
import GoogleMap from '../components/google_map';

class WeatherList extends Component{
    renderWeather(cityData){
        const name = cityData.city.name;
        const temp = cityData.list.map(listItem => listItem.main.temp);
        const pressure = cityData.list.map(listItem => listItem.main.pressure);
        const humidity = cityData.list.map(listItem => listItem.main.humidity);
        const lat = cityData.city.coord.lat;
        const lon = cityData.city.coord.lon;

        return(
            <tr key={ cityData.city.name }>
                <td>
                    <GoogleMap lat={lat} lon={lon} />
                </td>
                <td>
                    <Chart color="#82cbdd" data={temp} units="K" />
                </td>
                <td>
                    <Chart color="#004656" data={pressure} units="hPa" />
                </td>
                <td>
                    <Chart color="#002afc" data={humidity} units="%"/>
                </td>
            </tr>
        );
    }


    render(){
         if(!this.props.weather.length){
               return(<div className="nothing">
                    <p>Nothing to show here </p><span className="glyphicon glyphicon-cloud"></span>
                </div>) 
            }
        return (
            <table className="table table-hover">
                <thead>
                    <tr>
                        <th>City</th>
                        <th>Temperature (K)</th>
                        <th>Pressure (hPa)</th>
                        <th>Humidity (%)</th>
                    </tr>
                </thead>
                <tbody>
                    { this.props.weather.map(this.renderWeather) }
                </tbody>
            </table>
        )
    }
}

function mapStateToProps(state){
    return { weather : state.weather };
}

export default connect(mapStateToProps)(WeatherList);