const getAdmins = (map) => {
	let admins = [];

	for ([key, value] of map) {
		if (value === 'ADMIN') {
			admins.push(key);
		}
	}

	return admins;
};

// Instância Map()
const userRoles = new Map();

// Inserindo values ao Map() 
userRoles.set('Stephany', 'SUDO');
userRoles.set('Luiz', 'ADMIN');
userRoles.set('Elvira', 'ADMIN');
userRoles.set('Carolina', 'USER');
userRoles.set('Guilherme', 'USER');
userRoles.set('Marcos', 'USER');

// Imprime o value correspondente a key 'Guilherme'
userRoles.get('Guilherme');

// Deleta a key 'Marcos'
userRoles.delete('Marcos');

console.log(getAdmins(userRoles));
