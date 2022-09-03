function bubbleSort(list) {
	for (var i = 0; i < list.length; i = i + 1) {
		for (var j = 0; j < list.length - i - 1; j = j + 1) {
			if (list[j] > list[j+1]) {
				var temp = list[j];
				list[j] = list[j+1];
				list[j+1] = temp;
			}
		}
	}
}

var list = [
	5009, 2151, 8661, 1568, 4724, 1836, 2525, 1148, 2732, 7560, 1241, 6165, 4884, 4969, 5597, 8714, 3405, 8339, 3865, 9327, 1715, 9840, 1510, 3439, 8560, 4305, 7551, 6657, 5914, 3477, 5012, 3195, 6682, 2223, 7915, 3774, 3661, 1978, 9151, 9218, 7005, 7841, 5598, 3243, 5739, 6202, 8544, 4125, 1292, 6439, 8142, 5216, 4742, 1770, 2835, 1107, 2395, 4264, 9777, 8225, 6213, 1476, 6360, 4129,
	2934, 2096, 8196, 4801, 5428, 4726, 4039, 8155, 5456, 5659, 8303, 6499, 9642, 8508, 4532, 5507, 4716, 6904, 5426, 2308, 3498, 3024, 5507, 9505, 4118, 3516, 8666, 4180, 3233, 6458, 1911, 8371, 8963, 1528, 8271, 5883, 3049, 7134, 2911, 8029, 6763, 7728, 5247, 4264, 1962, 7601, 6742, 8249, 6821, 2077, 4663, 1664, 4230, 4691, 3209, 3541, 3591, 2658, 6742, 7425, 4076, 2686, 1541, 5146,
	5748, 3864, 6798, 1271, 1425, 3397, 1563, 1061, 7045, 1513, 5603, 2916, 1266, 8285, 1104, 8972, 2128, 1341, 9219, 4220, 5169, 4018, 3813, 6854, 6370, 4869, 6557, 9212, 6008, 6972, 4270, 7935, 5306, 4786, 8753, 2026, 4632, 5832, 9073, 1443, 9108, 8582, 8756, 3463, 1800, 7496, 5173, 9386, 5563, 3185, 8928, 4269, 5573, 2582, 6458, 3929, 9681, 1712, 6896, 7071, 5454, 7436, 7988, 5447,
	7240, 1178, 6305, 7924, 4490, 4369, 2167, 8256, 4912, 5328, 4248, 7956, 3761, 7512, 2226, 5158, 3550, 3560, 8528, 5047, 9852, 7706, 3680, 1383, 7105, 1758, 6901, 3760, 2802, 9076, 4453, 3891, 8116, 3584, 2451, 9618, 4305, 5652, 3436, 6745, 2781, 8321, 6263, 1160, 2958, 6136, 6815, 6243, 5317, 8490, 7126, 7363, 1189, 2053, 9585, 4347, 4348, 5647, 2023, 5997, 6711, 3800, 6947, 7592,
	6487, 6078, 7438, 9167, 2777, 7846, 3734, 9722, 5617, 2146, 6478, 4362, 3098, 4868, 9664, 6738, 9049, 1335, 6317, 6340, 6320, 9501, 5063, 3754, 9778, 8433, 5022, 9815, 6200, 1264, 1225, 3022, 9629, 1226, 7355, 6835, 6039, 1769, 1521, 1791, 4664, 5021, 6551, 5974, 8965, 3744, 9947, 2021, 8078, 8416, 9012, 2247, 4668, 7669, 9829, 3502, 5916, 2863, 8092, 4444, 1060, 4544, 7445, 2001,
	6879, 8363, 1614, 4333, 7278, 9626, 9495, 3004, 5264, 1533, 4470, 9047, 5376, 4266, 8675, 7852, 5263, 1498, 6156, 2414, 2668, 1845, 4496, 4280, 5520, 5030, 2657, 3230, 4236, 1515, 1472, 1021, 5326, 9487, 7451, 1948, 8489, 9370, 5715, 6409, 9294, 6592, 7757, 2563, 4819, 6693, 3877, 6089, 8105, 5421, 9836, 5996, 4591, 7729, 9265, 2870, 9557, 9112, 7338, 9183, 3188, 1707, 9989, 6662,
	3639, 9954, 9069, 9811, 7399, 9438, 4727, 5635, 1195, 3364, 3363, 2955, 4434, 9714, 6741, 9966, 7645, 4200, 4537, 5415, 4812, 9243, 9634, 4923, 3973, 4350, 9201, 2803, 3565, 9247, 4841, 5948, 2650, 8830, 2123, 6390, 3294, 3552, 7908, 2299, 7975, 7761, 5386, 8510, 1509, 8219, 8939, 4472, 2697, 5975, 8058, 6845, 4766, 9177, 1653, 1195, 7519, 8131, 6381, 5597, 1843, 6771, 1038, 9968,
	1490, 5557, 2887, 7211, 4390, 6466, 2863, 1686, 7556, 1131, 5934, 4681, 8201, 3625, 4260, 1390, 9363, 4507, 6617, 8289, 9770, 1818, 2352, 7445, 5670, 4084, 9163, 4937, 4531, 6063, 9499, 4452, 7420, 3233, 8327, 8441, 3263, 1479, 8056, 2541, 2000, 5324, 3008, 4025, 1463, 7831, 5282, 2875, 5845, 8560, 1364, 6460, 9908, 8141, 4026, 4785, 5790, 5867, 8689, 4558, 3768, 8161, 5428, 3962,
	1197, 7043, 3046, 7815, 1962, 3073, 8538, 9715, 3138, 7867, 5347, 2604, 1731, 1585, 3086, 4123, 5915, 2153, 4333, 4263, 6088, 4441, 9907, 1278, 6415, 1165, 3609, 2221, 1065, 4935, 4833, 2076, 8166, 6050, 9628, 4355, 5029, 3449, 7211, 9794, 9740, 8661, 9795, 1249, 7096, 8842, 5829, 9564, 4547, 9474, 2782, 6382, 1605, 4199, 3202, 8850, 6417, 3742, 1419, 1629, 2390, 2721, 1319, 6203,
	7930, 1890, 8241, 1657, 5306, 2010, 6724, 7182, 7726, 6614, 3670, 3293, 7823, 2371, 3989, 6220, 8667, 1866, 2431, 2659, 5004, 8134, 8341, 8474, 2779, 5232, 7782, 8510, 9923, 9270, 7241, 6655, 9106, 4995, 8647, 8427, 1383, 5768, 4488, 4688, 9548, 3881, 8993, 4979, 9088, 1088, 5289, 7383, 6305, 1602, 4895, 2045, 8231, 7592, 1804, 1629, 7694, 5881, 4805, 6182, 7377, 8979, 6146, 1698,
	9268, 8164, 8937, 7348, 6559, 4423, 8099, 5189, 8676, 9755, 1602, 8921, 9494, 7532, 7139, 7976, 7825, 3690, 2935, 4634, 8055, 6601, 7828, 4864, 8446, 9283, 8175, 2216, 1245, 1453, 1561, 8150, 2453, 7828, 9967, 2076, 9556, 5403, 9028, 1511, 8237, 9480, 7756, 6223, 9596, 3636, 7228, 4518, 2362, 7231, 6579, 7099, 3550, 9001, 2797, 5155, 3839, 8427, 6822, 5968, 5604, 6020, 2778, 8037,
	8317, 4659, 3224, 6910, 8579, 3135, 4045, 6795, 7163, 1647, 7260, 1448, 5960, 3977, 8424, 9793, 6135, 9838, 9960, 6119, 3882, 1012, 6361, 6252, 1337, 2729, 6221, 9994, 1669, 9593, 5606, 9172, 5372, 8750, 4153, 4803, 7772, 9880, 8232, 7063, 8577, 5745, 8282, 5241, 8589, 5330, 3159, 9008, 5618, 7419, 5230, 4797, 1080, 6773, 8960, 5415, 1530, 8668, 1689, 4227, 3476, 4840, 7961, 6386,
	6103, 9897, 1836, 4360, 8739, 2633, 7004, 3316, 1244, 7784, 5915, 7486, 4192, 8802, 4255, 3870, 3138, 5355, 9492, 2442, 2879, 9844, 2740, 6191, 3751, 6196, 1063, 3931, 4938, 5843, 7759, 8737, 8649, 7810, 4539, 2693, 1785, 6162, 1362, 1031, 7434, 8358, 1197, 3578, 5971, 4152, 6080, 8857, 7466, 5311, 9790, 6831, 5997, 2067, 1090, 3042, 3803, 7063, 3936, 1470, 1923, 7904, 7103, 2185,
	7411, 3783, 5014, 9079, 6087, 6186, 9424, 8085, 6179, 1155, 3628, 9364, 7631, 7227, 5364, 6403, 5924, 7492, 5250, 8952, 4945, 4785, 8873, 4576, 4690, 3316, 1712, 9549, 4447, 4666, 1695, 3888, 1134, 8975, 4472, 6537, 9300, 1945, 4858, 7132, 4891, 3020, 9108, 3508, 6604, 3523, 5549, 4694, 5863, 5102, 3746, 4961, 9445, 7743, 1767, 5509, 6355, 6185, 2852, 8361, 1587, 8298, 3645, 7156,
	3902, 4901, 2803, 9304, 1002, 4738, 3049, 2348, 3856, 6261, 7433, 2570, 3660, 5426, 6520, 6581, 6248, 9069, 3419, 1800, 4622, 6090, 1425, 3479, 2757, 2066, 6076, 7316, 3049, 8435, 6625, 3616, 4401, 7867, 5556, 6180, 3632, 9458, 5429, 9861, 4853, 7684, 3424, 8337, 3896, 5021, 8799, 6578, 2809, 1558, 7297, 4779, 2088, 1007, 7426, 8640, 4547, 8349, 4391, 3040, 5975, 9359, 4605, 8286,
	3712, 6009, 3001, 3510, 9618, 6217, 8746, 6130, 2280, 3199, 8769, 9672, 1707, 8449, 7622, 6023, 8071, 1330, 3861, 2919, 6879, 5535, 6461, 3720, 6053, 2198, 8350, 2781, 2516, 4499, 3310, 6990, 6501, 9443, 3765, 4101, 2659, 5805, 5480, 2686, 7898, 6521, 4077, 1965, 4149, 5976, 2511, 6315, 2804, 1448, 1773, 5527, 6001, 3619, 2434, 7911, 2392, 6081, 1074, 8116, 2505, 9600, 3390, 3385,
	5965, 4980, 7226, 4918, 6358, 4069, 3210, 5225, 9473, 9291, 8450, 3246, 9434, 9228, 9587, 6687, 8184, 9159, 7564, 5839, 5097, 1322, 9682, 5790, 9584, 7184, 9055, 1653, 4620, 5953, 6896, 2568, 2885, 2277, 4575, 5942, 9809, 3897, 4615, 5330, 6766, 7800, 3781, 1114, 5276, 2384, 3770, 9676, 4318, 6325, 1656, 7545, 7658, 4878, 7466, 8522, 7339, 8346, 7116, 3016, 6282, 2002, 1457, 8464,
	3866, 5586, 1569, 6358, 3823, 7483, 2508, 6827, 7501, 5763, 1514, 5719, 4113, 7288, 6731, 6898, 7319, 6252, 2693, 9824, 4701, 5593, 9554, 3137, 4698, 4231, 7582, 3348, 8853, 2808, 5346, 3277, 1826, 9368, 3490, 6833, 4128, 6983, 9501, 9007, 6902, 7465, 3427, 4947, 4079, 9338, 5386, 6420, 1844, 8005, 1255, 9742, 9907, 9580, 7944, 8139, 6791, 9127, 8062, 6518, 9382, 8554, 8766, 1567,
	9515, 9517, 5179, 9148, 3786, 6371, 8665, 6044, 7829, 7588, 2862, 4081, 1310, 7413, 3923, 7623, 3825, 2154, 2745, 4512, 8764, 7786, 3270, 2532, 2533, 7132, 2706, 2542, 8408, 2390, 9616, 6182, 7923, 4179, 9654, 2457, 7637, 6976, 5101, 6710, 8616, 6050, 9542, 7995, 2446, 5053, 1486, 8387
];

bubbleSort(list)