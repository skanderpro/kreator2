<?php

namespace App\Http\Controllers\Admin;

use App\Http\Requests\NewsRequest;
use Backpack\CRUD\app\Http\Controllers\CrudController;
use Backpack\CRUD\app\Library\CrudPanel\CrudPanelFacade as CRUD;
use Backpack\CRUD\app\Library\Widget;

/**
 * Class NewsCrudController
 * @package App\Http\Controllers\Admin
 * @property-read \Backpack\CRUD\app\Library\CrudPanel\CrudPanel $crud
 */
class NewsCrudController extends CrudController
{
    use \Backpack\CRUD\app\Http\Controllers\Operations\ListOperation;
    use \Backpack\CRUD\app\Http\Controllers\Operations\CreateOperation;
    use \Backpack\CRUD\app\Http\Controllers\Operations\UpdateOperation;
    use \Backpack\CRUD\app\Http\Controllers\Operations\DeleteOperation;
    use \Backpack\CRUD\app\Http\Controllers\Operations\ShowOperation;

    /**
     * Configure the CrudPanel object. Apply settings to all operations.
     *
     * @return void
     */
    public function setup()
    {
        CRUD::setModel(\App\Models\News::class);
        CRUD::setRoute(config('backpack.base.route_prefix') . '/news');
        CRUD::setEntityNameStrings('news', 'news');
    }

    /**
     * Define what happens when the List operation is loaded.
     *
     * @see  https://backpackforlaravel.com/docs/crud-operation-list-entries
     * @return void
     */
    protected function setupListOperation()
    {
        CRUD::setFromDb(); // set columns from db columns.

        /**
         * Columns can be defined using the fluent syntax:
         * - CRUD::column('price')->type('number');
         */
    }

    /**
     * Define what happens when the Create operation is loaded.
     *
     * @see https://backpackforlaravel.com/docs/crud-operation-create
     * @return void
     */
    protected function setupCreateOperation()
    {
        CRUD::setValidation(NewsRequest::class);
//        CRUD::setFromDb(); // set fields from db columns.

//        Widget::add()->type('script')->content('https://cdn.ckeditor.com/ckeditor5/41.0.0/super-build/ckeditor.js');

        /**
         * Fields can be defined using the fluent syntax:
         * - CRUD::field('price')->type('number');
         */

        CRUD::field('title')->type('text');
        CRUD::field([
            'name' => 'excerpt',
            'type' => 'tinymce',
            'label' => 'Excerpt',
            'options' => [
                'extended_valid_elements' => 'iframe[src|frameborder|style|scrolling|class|width|height|allowfullscreen]',
                'verify_html' => false,
                'cleanup' => false,
                'valid_children' => '+body[style],+body[script],+body[iframe]',
            ],

        ]);
        CRUD::field([
            'name' => 'content',
            'type' => 'tinymce',
            'label' => 'Content',
            'options' => [
                'extended_valid_elements' => 'iframe[src|frameborder|style|scrolling|class|width|height|allowfullscreen]',
                'verify_html' => false,
                'cleanup' => false,
                'valid_children' => '+body[style],+body[script],+body[iframe]',
            ],

        ]);


        CRUD::field('image')->type('upload')->withFiles();
        CRUD::field('created_at')->type('date');
    }

    /**
     * Define what happens when the Update operation is loaded.
     *
     * @see https://backpackforlaravel.com/docs/crud-operation-update
     * @return void
     */
    protected function setupUpdateOperation()
    {
        $this->setupCreateOperation();
    }
}
