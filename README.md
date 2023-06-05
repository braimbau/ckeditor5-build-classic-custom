# CKEditor 5 classic editor build custom for Lakaa

<details>
 <summary> differences with official classic editor plugin</summary>

### Plugins added:
+ Highlight
+ Underline
+ SimpleUploadAdapter
+ ImageResize

### Plugins Removed:
- UploadAdapter
- Autoformat
- CloudServices
- BlockQuote
- CKBox
- CKFinder
- CloudServices
- EasyImage
- ImageCaption
- Indent
- MediaEmbed
- PasteFromOffice
- PictureEditing
- TableToolbar
- TextTransformation
</details>


## How to change plugins

### install the package localy

1 - Install the [original repository](https://github.com/ckeditor/ckeditor5)

`git clone git@github.com:ckeditor/ckeditor5.git`

2 - Move to the packages folder

`cd ckeditor5/packages`

3 - Clone the custom build from this repository

`git clone git@github.com:Lakaaio/ckeditor5-build-classic-custom.git`

4 - Remove the original classic build

`rm -rf ckeditor5-build-classic`

5 - Rename the custom build

`mv ckeditor5-build-classic-custom ckeditor5-build-classic`

6 - Move to the classic build folder

`cd ckeditor5-build-classic`

7 - Make all modification needed to the pacakge
>Most changes happen in the src/ckeditor.ts file.
>If new plugins are added, dont forget to add them in the package.json.
>Remember that the new plugin must match the version of all the others.

8 - Install dependencies with npm

`npm i`

9 - build the package

`npm run build`

<details>
 <summary>Test the changes localy</summary>

1 - Move to the frontend of the main project

2 - Disable the linter in `quasar.conf.js`

```
[...]
eslint: {
	// fix: true,
	// include = [],
	// exclude = [],
	// rawOptions = {},
	warnings: false,
	errors: false,
},
[...]
```

3 - Modify the import of the plugin in `Editor.vue`

~~import ClassicEditor from '@lakaaio/ckeditor5-build-classic';~~
`import '@lakaaio/ckeditor5-build-classic';`

4 - Remove the dependecy from git in `package.json`

~~"@lakaaio/ckeditor5-build-classic": "github:Lakaaio/ckeditor5-build-classic-custom",~~

5 - import the local package

`npm i <path to package>/packages/ckeditor5-build-classic`
> this should add this line in package.json
> "@lakaaio/ckeditor5-build-classic": "file:<path>ckeditor5-build-classic",

6 - delete the old packages
`rm -rf node-modules`

7 - Install dependencies with npm

`npm i`

8 - Test
> You may want to modify Editor.vue to implement the features of the new plugins

9 - Undo steps 2, 3, 4
</details>

<details>
 <summary>Make the changes permanent</summary>

1 - Make sure that the changes are working localy
	
2 - Update the version in package.json

3 - Add, commit and push to github

4 - List any changes to the plugin list on top of the readme

</details>
