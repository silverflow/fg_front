import React from "react";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import ListSubheader from "@material-ui/core/ListSubheader";
import ChatIcon from "@material-ui/icons/Chat";
import CreateIcon from "@material-ui/icons/Create";
import ListIcon from "@material-ui/icons/List";
import PhotoIcon from "@material-ui/icons/Panorama";
import CalendarIcon from "@material-ui/icons/Today";
import DownloadIcon from "@material-ui/icons/CloudDownload";
import CheckIcon from "@material-ui/icons/CheckBox";
import TVIcon from "@material-ui/icons/Tv";

export const mainListItems = (
  <div>
    <ListItem button>
      <ListItemIcon>
        <ChatIcon />
      </ListItemIcon>
      <ListItemText primary="Chat" />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <CreateIcon />
      </ListItemIcon>
      <ListItemText primary="TimeLine" />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <ListIcon />
      </ListItemIcon>
      <ListItemText primary="Galler List" />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <PhotoIcon />
      </ListItemIcon>
      <ListItemText primary="Gallery" />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <CalendarIcon />
      </ListItemIcon>
      <ListItemText primary="Calendar" />
    </ListItem>
  </div>
);

export const secondaryListItems = (
  <div>
    <ListSubheader inset>TOOLS</ListSubheader>
    <ListItem button>
      <ListItemIcon>
        <DownloadIcon />
      </ListItemIcon>
      <ListItemText primary="Torrent Search" />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <CheckIcon />
      </ListItemIcon>
      <ListItemText primary="To Do List" />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <TVIcon />
      </ListItemIcon>
      <ListItemText primary="TV" />
    </ListItem>
  </div>
);
