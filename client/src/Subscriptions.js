import React from 'react';

//styles
import "./Subscriptions.scss"

const Subscriptions = () => {
    return(
        <div className="content">
            <table className="content__table">
                <tr>
                    <th>Subscription</th>
                    <th>Cost</th>
                    <th>Renewed on</th>
                </tr>
                <tr>
                    <td>HBO</td>
                    <td>$15.00</td>
                    <td>15th</td>
                </tr>
                <tr>
                    <td>Netflix</td>
                    <td>$9.00</td>
                    <td>1st</td>
                </tr>
                <tr>
                    <td>Amazon</td>
                    <td>$15.00</td>
                    <td>15th</td>
                </tr>
                <tr>
                    <td>NyTimes</td>
                    <td>$12.00</td>
                    <td>30th</td>
                </tr>
                <tr>
                    <td>New Yorker</td>
                    <td>$15.00</td>
                    <td>15th</td>
                </tr>
                <tr>
                    <td>Roku</td>
                    <td>$15.00</td>
                    <td>15th</td>
                </tr>
                <tr>
                    <td>BlueApron</td>
                    <td>$25.00</td>
                    <td>10th</td>
                </tr>
            </table>
        </div>
    )
}

export default Subscriptions