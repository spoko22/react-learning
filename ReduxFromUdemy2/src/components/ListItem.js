import React, {Component} from 'react';
import {
    View,
    Text,
    TouchableWithoutFeedback,
    LayoutAnimation,
    Platform,
    UIManager
} from 'react-native';
import {CardSection, Card} from './common';
import * as actions from '../actions';
import {connect} from 'react-redux';

class ListItem extends Component {

    constructor() {
        super();

        if (Platform.OS === 'android') {
            UIManager.setLayoutAnimationEnabledExperimental && UIManager.setLayoutAnimationEnabledExperimental(true);
        }
    }

    componentWillUpdate(){
        LayoutAnimation.easeInEaseOut();
    }

    render() {
        const {id, title, description} = this.props.item;
        const {titleStyle, cardSectionStyle, descriptionStyle} = styles;
        const {selectLibrary, deselectLibrary} = this.props;

        return (
            <Card>
                <TouchableWithoutFeedback onPress={() => this.props.isExpanded ? deselectLibrary(id) : selectLibrary(id)}>
                    <View>
                        <CardSection>
                            <Text style={titleStyle}>{ title }</Text>
                        </CardSection>
                    </View>
                </TouchableWithoutFeedback>
                {this.renderDescription()}
            </Card>
        );
    }

    renderDescription() {
        if (this.props.isExpanded) {
            return (
                <CardSection>
                    <Text style={styles.descriptionStyle}>{ this.props.item.description }</Text>
                </CardSection>
            );
        }
    }
}

const styles = {
    titleStyle: {
        fontSize: 18,
        paddingLeft: 15
    },
    descriptionStyle: {

    },
    cardSectionStyle: {
        flexDirection: 'column'
    }
};

const mapStateToProps = (state, ownProps) => {
    let isExpanded = state.selectedLibraryId.includes(ownProps.item.id);
    return { isExpanded };
};

export default connect(mapStateToProps, actions)(ListItem);