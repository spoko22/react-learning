import React, { Component } from 'react';
import { connect } from 'react-redux';
import { ListView, Text } from 'react-native';
import ListItem  from './ListItem';

class LibraryList extends Component {
    componentWillMount(){
        const ds = new ListView.DataSource({
           rowHasChanged: (r1, r2) => r1 !== r2
        });

        this.dataSource = ds.cloneWithRows(this.props.libraries);
    }

    render() {
        return (
            <ListView
                dataSource={this.dataSource}
                renderRow={(data) => this.renderRow(data)}

            />
        );
    };

    renderRow(library){
        return <ListItem item={library}/>
    }
}

const mapStateToProps = state => {
    return { libraries: state.libraries };
};

export default connect(mapStateToProps)(LibraryList);