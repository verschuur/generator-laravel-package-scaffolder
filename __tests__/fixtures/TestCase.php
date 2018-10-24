<?php

namespace TestVendor\MyPackage\Tests;

/**
 * Override the standard PHPUnit testcase with the Testbench testcase
 *
 * @see https://github.com/orchestral/testbench#usage
 */
class TestCase extends Orchestra\Testbench\TestCase
{
    /**
     * Include the package's service provider(s)
     *
     * @see https://github.com/orchestral/testbench#custom-service-provider
     * @param [type] $app
     * @return void
     */
    protected function getPackageProviders($app)
    {
        return [
            'TestVendor\MyPackage\MyPackageServiceProvider'
        ];
    }
}
