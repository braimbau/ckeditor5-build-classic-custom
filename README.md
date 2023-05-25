# CKEditor 5 classic editor build custom for Lakaa
========================================

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

Install the [original repository](https://github.com/ckeditor/ckeditor5)

`git clone git@github.com:ckeditor/ckeditor5.git`

Move to the packages folder

`cd ckeditor5/packages`

Clone the custom build from this repository\

`git clone git@github.com:Lakaaio/ckeditor5-build-classic-custom.git`

Remove the original classic cuild

`rm -rf ckeditor5-build-classic`

Rename the custom build

`mv ckeditor5-build-classic-custom ckeditor5-build-classic`

Move to the classic build folder

`cd ckeditor5-build-classic`

Make all modification needed to the pacakge
>Most changes happen in the src/ckeditor.ts file
>If new plugins are added, dont forget to add them in the package.json
>Remember that the new plugin must match the version of all the others
