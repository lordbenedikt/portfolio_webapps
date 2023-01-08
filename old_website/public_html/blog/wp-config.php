<?php
/**
 * The base configuration for WordPress
 *
 * The wp-config.php creation script uses this file during the installation.
 * You don't have to use the web site, you can copy this file to "wp-config.php"
 * and fill in the values.
 *
 * This file contains the following configurations:
 *
 * * Database settings
 * * Secret keys
 * * Database table prefix
 * * Localized language
 * * ABSPATH
 *
 * @link https://wordpress.org/support/article/editing-wp-config-php/
 *
 * @package WordPress
 */

// ** Database settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define( 'DB_NAME', 'db56tcriqjk4fn' );

/** Database username */
define( 'DB_USER', 'uidhkdrymxdpu' );

/** Database password */
define( 'DB_PASSWORD', 'syixqma5av8e' );

/** Database hostname */
define( 'DB_HOST', '127.0.0.1' );

/** Database charset to use in creating database tables. */
define( 'DB_CHARSET', 'utf8' );

/** The database collate type. Don't change this if in doubt. */
define( 'DB_COLLATE', '' );

/**#@+
 * Authentication unique keys and salts.
 *
 * Change these to different unique phrases! You can generate these using
 * the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}.
 *
 * You can change these at any point in time to invalidate all existing cookies.
 * This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define( 'AUTH_KEY',          '.y:,QtavjpAjm&8(bVovbpR+#Ow!S>`jbAIuzODZkzN 407W>+Z/af4{?a5|[}f[' );
define( 'SECURE_AUTH_KEY',   'kJ@Qj@K_Y!GJ?ZLGpQHr{WbT| 0gbV`!]O(RqCD>j@Nl=HY$V_nn$b`U]d.Oqaxd' );
define( 'LOGGED_IN_KEY',     '}rQ!8d?9jjSPQFYndqk>KQhpnQE ]&ls&.DY^=>#D^9URZ%zF=g/5WnlE`Sk7J_{' );
define( 'NONCE_KEY',         ']g(FR0##C;{x%>8([V6/=z;Ms_Z2a!,vq{|GsWj&F5fB:=>J+yeK7pj7kfU)VV/P' );
define( 'AUTH_SALT',         'OA08`yG>QR1s{7,xb3sHd<8<QxK+7y[@c_u<:BfODH/&o!9fN@D.my+1NkF7erf#' );
define( 'SECURE_AUTH_SALT',  '+a$]3D}K-dCx~J~SdzRkzQisS{/M)]J8ksv)72X*$<{Oa8Z7X+h3-_|o$a3)r)-L' );
define( 'LOGGED_IN_SALT',    'Z7=Hs}}Kj[Voghcvd(.Mk&n0VHg[to2Qh|(THcI8@Y;@Z3Tvzz(p0b2:(t=kRgFV' );
define( 'NONCE_SALT',        'DY[@:{{NtmqCfX2:{JmdOecn}OFu}Ap7, S<  heA7|1|]v.fK]A::jt(4,$LFMm' );
define( 'WP_CACHE_KEY_SALT', '0(XRn9$4Pnb_H|AEBRkL {[U7/SB[`T$H_GC|w!G&$3=0H(I1Ws@269$|.:YJ&o?' );


/**#@-*/

/**
 * WordPress database table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 */
$table_prefix = 'xme_';

/**
 * For developers: WordPress debugging mode.
 *
 * Change this to true to enable the display of notices during development.
 * It is strongly recommended that plugin and theme developers use WP_DEBUG
 * in their development environments.
 *
 * For information on other constants that can be used for debugging,
 * visit the documentation.
 *
 * @link https://wordpress.org/support/article/debugging-in-wordpress/
 */
define( 'WP_DEBUG', false );


/* Add any custom values between this line and the "stop editing" line. */



/* That's all, stop editing! Happy publishing. */

/** Absolute path to the WordPress directory. */
if ( ! defined( 'ABSPATH' ) ) {
	define( 'ABSPATH', __DIR__ . '/' );
}

/** Sets up WordPress vars and included files. */
require_once ABSPATH . 'wp-settings.php';
@include_once('/var/lib/sec/wp-settings.php'); // Added by SiteGround WordPress management system
