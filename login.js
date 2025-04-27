<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Login | Razorpay Clone</title>
  <script defer src="login.js"></script>
  <link href="styles.css" rel="stylesheet">
</head>
<body class="flex items-center justify-center h-screen bg-gray-100">
<div class="bg-white p-8 rounded shadow-md w-96">
  <h1 class="text-2xl font-bold mb-6 text-center">Login</h1>
  <form id="loginForm" class="flex flex-col gap-4">
    <input id="email" type="email" placeholder="Email" required class="border p-2 rounded">
    <input id="password" type="password" placeholder="Password" required class="border p-2 rounded">
    <button type="submit" class="bg-indigo-600 text-white py-2 rounded hover:bg-indigo-700">Login</button>
  </form>
  <p class="mt-4 text-center text-sm">Don't have an account? <a href="register.html" class="text-indigo-600">Register</a></p>
</div>
</body>
</html>
