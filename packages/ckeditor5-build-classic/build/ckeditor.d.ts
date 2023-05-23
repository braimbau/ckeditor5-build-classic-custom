/**
 * @license Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */
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
    static builtinPlugins: (typeof Essentials | typeof Bold | typeof Italic | typeof Underline | typeof SimpleUploadAdapter | typeof Image | typeof ImageResize | typeof ImageStyle | typeof ImageToolbar | typeof ImageUpload | typeof Link | typeof Paragraph | typeof Heading | typeof Table | typeof List | typeof Highlight)[];
    static defaultConfig: {
        toolbar: {
            items: string[];
        };
        table: {
            contentToolbar: string[];
        };
        language: string;
    };
}
