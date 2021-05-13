import { TabBar } from "antd-mobile";
import { Component } from "react";
import cookbook from "assets/cookbook.png";
import cookbookActive from "assets/cookbook-active.png";
import location from "assets/location.png";
import locationActive from "assets/location-active.png";
import menu from "assets/menu.png";
import menuActive from "assets/menu-active.png";
import more from "assets/more.png";
import moreActive from "assets/more-active.png";
import { connect } from "react-redux";
import { Cookbook, Category, Map, More } from "./index";
@connect((state) => ({
  isShow: state.home.isShow,
}))
class Tab extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedTab: "location",
      hidden: false,
      fullScreen: true,
    };
  }

  render() {
    return (
      <div
        style={
          this.state.fullScreen
            ? { position: "fixed", height: "100%", width: "100%", top: 0 }
            : { height: 400 }
        }
      >
        <TabBar
          unselectedTintColor="#666"
          tintColor="#000"
          barTintColor="white"
          hidden={this.state.hidden}
        >
          {[
            <TabBar.Item
              title="美食大全"
              key="cookbook"
              icon={
                <div
                  style={{
                    width: "22px",
                    height: "22px",
                    background: `url(${cookbook}) center center /  21px 21px no-repeat`,
                  }}
                />
              }
              selectedIcon={
                <div
                  style={{
                    width: "22px",
                    height: "22px",
                    background: `url(${cookbookActive}) center center /  21px 21px no-repeat`,
                  }}
                />
              }
              selected={this.state.selectedTab === "cookbook"}
              onPress={() => {
                this.setState({
                  selectedTab: "cookbook",
                });
              }}
            >
              <Cookbook></Cookbook>
            </TabBar.Item>,
            <TabBar.Item
              icon={
                <div
                  style={{
                    width: "22px",
                    height: "22px",
                    background: `url(${location}) center center /  21px 21px no-repeat`,
                  }}
                />
              }
              selectedIcon={
                <div
                  style={{
                    width: "22px",
                    height: "22px",
                    background: `url(${locationActive}) center center /  21px 21px no-repeat`,
                  }}
                />
              }
              title="美食地图"
              key="location"
              selected={this.state.selectedTab === "location"}
              onPress={() => {
                this.setState({
                  selectedTab: "location",
                });
              }}
              data-seed="logId1"
            >
              <Map />
            </TabBar.Item>,
            <TabBar.Item
              icon={
                <div
                  style={{
                    width: "22px",
                    height: "22px",
                    background: `url(${menu}) center center /  21px 21px no-repeat`,
                  }}
                />
              }
              selectedIcon={
                <div
                  style={{
                    width: "22px",
                    height: "22px",
                    background: `url(${menuActive}) center center /  21px 21px no-repeat`,
                  }}
                />
              }
              title="分类"
              key="menu"
              selected={this.state.selectedTab === "menu"}
              onPress={() => {
                this.setState({
                  selectedTab: "menu",
                });
              }}
            >
              <Category />
            </TabBar.Item>,
            <TabBar.Item
              icon={{
                uri: more,
              }}
              selectedIcon={{
                uri: moreActive,
              }}
              title="更多"
              key="more"
              selected={this.state.selectedTab === "more"}
              onPress={() => {
                this.setState({
                  selectedTab: "more",
                });
              }}
            >
              <More />
            </TabBar.Item>,
          ].filter((item, index) => {
            return (index === 1 && this.props.isShow) || index !== 1;
          })}
        </TabBar>
      </div>
    );
  }
}
export default Tab;
