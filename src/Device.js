import React, {Component} from 'react';

export default class Device extends Component{
    render(){
         const {
            id,
            device_label,
            last_reported_time,
            status,
        } = this.props.device;

        let statusColorClass =  ()=>{
            
                if(status==='OK'){
                    return 'device-status-green cell';
                }else{
                    return 'device-status-red cell'
                }
            
        }

        let getLocalTime = () => {
            var date = new Date(last_reported_time);
            return date.toString();
        }
        //const collectionId = this.props.post.collection_id;

        return (
            <div id={id} key={id} className="device-table">
                    <span className="device-label cell">{device_label}</span>
                    <span className="device-uptime cell">{getLocalTime()}</span>
                    <span className={statusColorClass()}></span>
            </div>
        );
    }
}