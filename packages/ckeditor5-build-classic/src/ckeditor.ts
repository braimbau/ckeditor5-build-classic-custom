/**
 * @license Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

// The editor creator to use.
import ClassicEditorBase from '@ckeditor/ckeditor5-editor-classic/src/classiceditor';

import { Essentials } from '@ckeditor/ckeditor5-essentials';
import { Bold, Italic, Underline } from '@ckeditor/ckeditor5-basic-styles';
import { Link } from '@ckeditor/ckeditor5-link';
import { Paragraph } from '@ckeditor/ckeditor5-paragraph';
import SimpleUploadAdapter from '@ckeditor/ckeditor5-upload/src/adapters/simpleuploadadapter';
import { Heading } from '@ckeditor/ckeditor5-heading';
import { Table } from '@ckeditor/ckeditor5-table';
import { List } from '@ckeditor/ckeditor5-list';
import { Highlight } from '@ckeditor/ckeditor5-highlight';
import Image from '@ckeditor/ckeditor5-image/src/image';
import ImageToolbar from '@ckeditor/ckeditor5-image/src/imagetoolbar';
import ImageResize from '@ckeditor/ckeditor5-image/src/imageresize';
import ImageUpload from '@ckeditor/ckeditor5-image/src/imageUpload';
import ImageStyle from '@ckeditor/ckeditor5-image/src/imagestyle';

export default class ClassicEditor extends ClassicEditorBase {
	public static override builtinPlugins = [
		Essentials,
		Bold,
		Italic,
		Link,
		Underline,
		Paragraph,
		SimpleUploadAdapter,
		Heading,
		Table,
		List,
		Highlight,
		Image,
		ImageToolbar,
		ImageResize,
		ImageUpload,
		ImageStyle
	];

	public static override defaultConfig = {
		toolbar: {
			items: [
				'heading', '|', 'bold', 'italic', 'underline', 'NumberedList',
				'BulletedList', '|', 'link', 'insertTable', '|', 'undo', 'redo',
			]
		},
		table: {
			contentToolbar: [
				'tableColumn',
				'tableRow',
				'mergeTableCells'
			]
		},
		// This value must be kept in sync with the language defined in webpack.config.js.
		language: 'en'
	};
}
