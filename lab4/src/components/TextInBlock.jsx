import React from 'react';

class Attention extends React.Component {
    render() {
        return (
            <div class="second-post">
                <p class="text-center">
                    {this.props.text}
                </p>
            </div>
        );
    }
}

export default Attention;