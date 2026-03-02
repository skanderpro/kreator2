<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('apartments', function (Blueprint $table) {
            $table->id();
            $table->string('title');
            $table->string('type');
            $table->string('planing_type');
            $table->float('area');
            $table->float('living_area');
            $table->integer('rooms');
            $table->integer('parking_count')->nullable();
            $table->integer('building');
            $table->integer('section');
            $table->integer('floor');
            $table->float('price');
            $table->float('price_for_meter');
            $table->string('plan');
            $table->string('floor_plan');
            $table->string('gen_plan');
            $table->boolean('sold')->default(false);
            $table->json('features')->nullable();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('apartments');
    }
};
