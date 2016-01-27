import * as React from "react";

import SelectPicker from "../_common/select-picker";
import HomeActions from "../../actions/home-actions";

interface Props {
    cities: City[];
    isDisabled: boolean;
    selectedCityIds: string;
}

class HomeCities extends React.Component<Props, any> {
    render() {
        let options = [];

        this.props.cities.forEach(city => {
            options.push(
                <option
                    key={city._id}
                    value={city._id.toString()}>{city.name}
                </option>
            );
        });

        return (
            <div>
                <SelectPicker
                    className="form-control"
                    title="Select Cities"
                    multiple
                    disabled={this.props.isDisabled}
                    defaultValue={this.props.selectedCityIds}
                    onChange={this.onChange.bind(this)}
                >
                    {options}
                </SelectPicker>
            </div>
        );
    }

    private onChange(value: string[]) {
        HomeActions.changeCities(value);
    }
}

export default HomeCities;
