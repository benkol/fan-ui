# fan-ui
Alma Laser's home exercise

A home exercise I recieved from Alma Laser. The task's description was:

## General instructions:
- The project should be written as a single page application using ReactJS
- The UI design should be written using HTML and CSS only

## Description:
The project will consist of a web app that displays a file structure consisting of folders and images in a radial menu.

The file structure tree consists of two types of nodes:
- Folders
- Images

(You can assume that only these two types of nodes will exist)

The web app will contain the following two pages: **home** and **picture**.

### Home Page

Route: ‘/home’

The **home** page will display the file structure as a tree of folders and images.

The file tree will be displayed as a radial menu. Each level of the tree represents the content of the selected folder from the previous level, beginning with the root node. The distance of each level from the previous level should be determined by the number of nodes displayed on that level so that all nodes will fit on the page. A folder node should be colored light grey, an expanded folder node should be dark grey and a picture node should be blue.

Initial display will show only the root node (representing the root folder):

- Clicking on a folder node will display the child nodes belonging to that folder.
- Clicking on an image node will move to the picture page (see additional details below).

Child nodes for a specified folder will be retrieved using an API request to the server.

In case an error occurs while retrieving the file structure, an error message will be displayed to the user in the form of a javascript alert dialog.

Refer to the following page design for an example:

### Picture Page

Route: ‘/picture?path=<image_path>’

The **picture** page will show a selected image (the **primary image**) along with a grid of all other images present in the primary image’s parent folder (the **secondary images**).

The primary image’s path should be retrieved from a URL parameter (as specified above).

Clicking on a secondary image will display that image as the primary image and all other images as secondary images (including the old primary image).

If an error occurs while retrieving the primary image, or if no primary image parameter is supplied in the URL, the user will be redirected back to the **home** page.

The secondary images grid should be responsive, with the number of images existing on each row determined by the width of the page (there should be a maximum of 5 images on each row of the grid).

Refer to the following page design for an example:

## API Details:

URL: http://test.devsense.co.il/public/explorePictures

METHOD: GET

Headers:

- X-TOKEN: 2d4e69f4823176197ccf41caa5ee6456

Parameters:

- path: the folder path to load (use value ‘root’ to request the root folder)

Response Codes:

- 401: unauthorized request due to an incorrect or missing X-TOKEN header
- 404: the requested path was not found
- 599: random server error that can be thrown for any request
- 500: unknown server error

Response Data Structure:

- type: the node type (0 = folder, 1 = image)
- label: the node name
- children: the child nodes of the node

Response Example:
```
{
data: {
"type": 0,
"label": "folder0_0",
"children": [
{
"type": 0,
"label": "folder0_0_0"
},
{
"type": 0,
"label": "folder0_0_1"
},
{
"type": 0,
"label": "folder0_0_2"
},
{
"type": 0,
"label": "folder0_0_3"
},
{
"type": 0,
"label": "folder0_0_4"
},
{
"type": 0,
"label": "folder0_0_5"
},
{
"type": 1,
"label": "picture0_0_6",
"url": "http://thecatapi.com/api/images/get?image_id=999"
},
{
"type": 1,
"label": "picture0_0_7",
"url": "http://thecatapi.com/api/images/get?image_id=811"
}
]
}
}
```

Working demo: http://alma-fe.benkol.com/home
