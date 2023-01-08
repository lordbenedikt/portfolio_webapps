<?php

// BEGIN iThemes Security - Do not modify or remove this line
// iThemes Security Config Details: 2
define( 'FORCE_SSL_ADMIN', true ); // Redirect All HTTP Page Requests to HTTPS - Security > Settings > Enforce SSL
define( 'DISALLOW_FILE_EDIT', true ); // Disable File Editor - Security > Settings > WordPress Tweaks > File Editor
// END iThemes Security - Do not modify or remove this line

//Begin Really Simple SSL session cookie settings
@ini_set('session.cookie_httponly', true);
@ini_set('session.cookie_secure', true);
@ini_set('session.use_only_cookies', true);
//END Really Simple SSL
/**
 * The base configuration for WordPress
 *
 * The wp-config.php creation script uses this file during the
 * installation. You don't have to use the web site, you can
 * copy this file to "wp-config.php" and fill in the values.
 *
 * This file contains the following configurations:
 *
 * * MySQL settings
 * * Secret keys
 * * Database table prefix
 * * ABSPATH
 *
 * @link https://wordpress.org/support/article/editing-wp-config-php/
 *
 * @package WordPress
 */

// ** MySQL settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define( 'DB_NAME', 'dbwow8pgb47vmd' );

/** MySQL database username */
define( 'DB_USER', 'u1bmbtbduxzhl' );

/** MySQL database password */
define( 'DB_PASSWORD', 'vrkczkdqmk5a' );

/** MySQL hostname */
define( 'DB_HOST', '127.0.0.1' );

/** Database Charset to use in creating database tables. */
define( 'DB_CHARSET', 'utf8' );

/** The Database Collate type. Don't change this if in doubt. */
define( 'DB_COLLATE', '' );

/**
 * Authentication Unique Keys and Salts.
 *
 * Change these to different unique phrases!
 * You can generate these using the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}
 * You can change these at any point in time to invalidate all existing cookies. This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define( 'AUTH_KEY',          'bp~IXwSq,5dKW$o)P9}(25x2A 4|!u?Q+9--*6L|-e%bX`o-I`bNjrh 4Gpeej:S' );
define( 'SECURE_AUTH_KEY',   ',%S<0EmLl>7!Q< o0PF&kVbAmA:SAC<RXJWIkH:0gzTo9:2@[0gWBbNq9m+jG(Cd' );
define( 'LOGGED_IN_KEY',     '2<7@[Sj]I0/JS*LGxugIUVk>j=<TQ6/zQw DNmh2??#Ni|p6=s;]rw$k)Lq*CCi:' );
define( 'NONCE_KEY',         ' rdbAX)/x}(w&t$ld/T$jyGb(0c.!iUCM_[etWI=;?lJjCGyJiknF][/J,4Lv`*-' );
define( 'AUTH_SALT',         '<B,t5r}C(t}Jv;Z!(zFKR/Z)2Wad=@Z/>5&`T*Gj bplB$GiN1k/[dxRY^/YeK-N' );
define( 'SECURE_AUTH_SALT',  '5v;h$CCI[j*iQCoabA-Dryt_0Zk&$cRGC,F WA={uP.e9G^R<[9eyQg8_{bFzsPw' );
define( 'LOGGED_IN_SALT',    '(mAJ[2G|VB!vk]O;4bn0|z>s;:]MoaVie_qe.*]R$XD!QY<a^VdzL9M~*R@1!?e_' );
define( 'NONCE_SALT',        'OnAlht4TT|wp&{<Q9hQ>COqHyi*t{GBr7noEP,Jf.P?gx52d3VU:V+AZXr]up!v0' );
define( 'WP_CACHE_KEY_SALT', ']:l%]NN}V:&!N&XfI>]q,jEbzWhml~Srj Q?K]:ZdXL4[5@wh3$X:H,C[5WyI7U)' );

/**
 * WordPress Database Table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 */
$table_prefix = 'wtv_';




/* That's all, stop editing! Happy publishing. */

/** Absolute path to the WordPress directory. */
if ( ! defined( 'ABSPATH' ) ) {
	define( 'ABSPATH', dirname( __FILE__ ) . '/' );
}

/** Sets up WordPress vars and included files. */
require_once ABSPATH . 'wp-settings.php';
@include_once('/var/lib/sec/wp-settings.php'); // Added by SiteGround WordPress management system
