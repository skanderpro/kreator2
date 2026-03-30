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
        Schema::table('apartments', function (Blueprint $table) {
            $table->renameColumn('floor', 'floor_old');
        });
        Schema::table('apartments', function (Blueprint $table) {
            $table->json('floor')->nullable();
        });

        $apartments = \App\Models\Apartment::query()->get();
        foreach ($apartments as $apartment) {
            if (!$apartment->floor_old) {
                continue;
            }

            $apartment->floor = json_encode([$apartment->floor_old]);
            $apartment->save();
        }

        Schema::table('apartments', function (Blueprint $table) {
            $table->dropColumn('floor_old');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::table('apartments', function (Blueprint $table) {
            //
        });
    }
};
