<?php

namespace App\Http\Controllers\Admin;

use App\Http\Requests\ApartmentRequest;
use Backpack\CRUD\app\Http\Controllers\CrudController;
use Backpack\CRUD\app\Library\CrudPanel\CrudPanelFacade as CRUD;

/**
 * Class ApartmentCrudController
 * @package App\Http\Controllers\Admin
 * @property-read \Backpack\CRUD\app\Library\CrudPanel\CrudPanel $crud
 */
class ApartmentCrudController extends CrudController
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
        CRUD::setModel(\App\Models\Apartment::class);
        CRUD::setRoute(config('backpack.base.route_prefix') . '/apartment');
        CRUD::setEntityNameStrings('apartment', 'apartments');
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
        CRUD::setValidation(ApartmentRequest::class);

        CRUD::field('title')->type('text');
        CRUD::field('planing_type')->type('text');
        CRUD::field([
            'name'        => 'type',
            'label'       => "Type",
            'type'        => 'select_from_array',
            'options'     => ['apartment' => 'Apartment', 'parking' => 'Parking'],
            'allows_null' => false,
            'default'     => 'apartment',
        ]);
        CRUD::field('living_area')->type('number');
        CRUD::field('rooms')->type('number');
        CRUD::field('building')->type('number');
        CRUD::field('section')->type('number');
        CRUD::field('floor')->type('number');
        CRUD::field('area')->type('number');
        CRUD::field('price')->type('number');
        CRUD::field('price_for_meter')->type('number');
        CRUD::field('plan')->type('upload')->withFiles();
        CRUD::field('floor_plan')->type('upload')->withFiles();
        CRUD::field('gen_plan')->type('upload')->withFiles();
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
