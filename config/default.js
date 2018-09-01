module.exports = {
	listener: {
		port: 3000,
		auth: {
			// should only set relaxCredentials to true for desktop or sample work
			relaxCredentials: true,
			// provide secret _or_ publicKey, if both are provided secret will take precedence!
			// secret: 's3cret',
			publicKey:
				// 'MIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEAiJVhAMEY4rllFv9KgWh2/eo2MIx80KlCnpiZZC+K97tPqTglNwgh9YIGro5j178EgBBA3LlRZrTrfV6MSSZT3gnPsypEn/Yx9pVPc1zsPDLFoUSgclg1VafXvh9JuhE1n7i3LunV0b6hwTInXB0nQPZLiCM9w494DShQ830necoGL3mWwcJV+WuTBQrq1cDYpuYxiFdONMAqywslgbEtob9OYeknvTqLvtd6iLNWut/b91bkQnXR6mKNAWt+avvLg3H2W5dpy/+HL2yjWfFdGEkdwglg2Li9IhuEYaWhH3ki8BTMkngUNb/gPnCvtkk1spwdexSbMPb5QJpsEbubkwIDAQAB',
				'MIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEAooW9yNSassUtStnCGykFCFTcbTpRw7G3qufzHAWe2qJDzvFx0Zfig30+XRIOsK5zU9/PJ1mirqPfuGgCnpRkL1oEW8LEnLS3bxOZL8+1k3PswNs4xVA59/f4tlOxCNZrpL35Q3CthYoEX4dOriFtPTM56uzVb2vMVj1VBYXsf5pttRWerwfVt5nZMEjunukfiN7xG7Hka+iPbZjYvUb9EAi6Pjfj3pL1GJfK40Ovj00eFkBRy/ZLaAuat2KPLKOwwXyPNkbQPax1DDSBK+ufgj47H+SXLvj/oiPyQlJWR2c2SjPmNhkHPdEkyZycPFyT117kC7ox8DgURtNIp957yQIDAQAB'
		}
	}
}
