import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheck } from '@fortawesome/free-solid-svg-icons';

class CompletedTask extends React.Component {
    render() {
        return (
            <div>
                <div class="d-flex flex-row w-100 border-bottom isCompleted" >
                    <div class={"bg-" + this.props.Priority + " border border-" + this.props.Priority + " p-0 mr-2 rounded-left"}></div>
                    <div class=" align-items-center justify-content-between p-2 row w-100" >
                        <div class="col ">
                            <div class="d-flex flex-row flex-wrap">
                                <p class="h5 text-uppercase m-2">{this.props.Name}</p>
                                <p class="TextDate h5 text-uppercase text-secondary m-2"> {this.props.Date}</p>
                            </div>
                            <div class="ElementBody text-start m-2">
                                {this.props.Description}
                            </div>
                        </div>

                        <div class=" m-1 col-md-3 col-12 d-flex justify-content-end" >
                        <FontAwesomeIcon icon={faCheck} className="text-success mt-1 fa-2x" />
                        </div>
                    </div>
                </div>
            </div>

        );
    }
}
export default CompletedTask;