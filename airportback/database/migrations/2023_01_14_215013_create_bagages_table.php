<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('bagages', function (Blueprint $table) {
            $table->id();
            $table->unsignedInteger('id_pass');
            $table->string('num_passort',60);
            $table->string('nom');
            $table->float('poids');
            $table->foreign('id_pass')
            ->references('id')
            ->on('passagers');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('bagages');
        $table->dropColumn('id_pass');
        $table->dropForeign(['id_pass']);
    }
};
