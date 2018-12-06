import { SafeAreaView, ScrollView, View, StyleSheet } from 'react-native';
import LargeCard from '../components/LargeCard';
import api from '../api';
import React from 'react';
import LikeIcon from '../components/LikeIcon';

export default class News extends React.Component {
  state = {
    trends: [],
    like: false
  };

  componentDidMount() {
    this.handleGetTrend();
  }

  handleGetTrend = () => {
    api
      .getNews()
      .then(res => {
        // console.log(res.articles);
        this.setState({
          trends: res.articles
        });
      })
      .catch(err => console.log(err));
  };

  handleSaveFav = () => {
    // let favTrend = this.state.trends
    // let save = event.target.getAttribute('id');
    // console.log('the id of this article is ', save);
    favTrend.map(fav => {
        // if(save === trend.id) {
            api.createTrend({
                title: fav.articles.title,
                description: fav.articles.description,
                url: fav.articles.url,
                image: fav.articles.urlToImage
            })
            .then(res => {
                console.log("Data has been saved to database");
            })
            .catch(err => console.log(err))
            // }
    })
   }

  render() {
    const { trends } = this.state;

    return (
      <View style={{ flex: 1 }}>
        <ScrollView style={styles.background}>
          {trends.map(trend => (
            <LargeCard
              key={trend.title}
              image={trend.urlToImage}
              name={trend.title}
              url={trend.url}
              description={trend.description}
              click={this.handleSaveFav}
            />
          ))}
          <View style={{ marginBottom: 60 }} />
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  background: {
    backgroundColor: '#e1e1e1'
  },
  bottom: {
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: '#e1e1e1'
  }
});
