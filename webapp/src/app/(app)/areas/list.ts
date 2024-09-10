import {
	LuBike,
	LuCircleDollarSign,
	LuFlower,
	LuGoal,
	LuHeart,
	LuLampDesk,
	LuPlane,
	LuSailboat,
	LuSmile,
	LuSprout,
	LuUsers,
	LuWaves,
} from 'react-icons/lu'

export const AREAS = [
	{ name: 'Finance', slug: 'Finance', icon: LuCircleDollarSign },
	{ name: 'Network & Social', slug: 'network-and-social', icon: LuUsers },
	{ name: 'Career', slug: 'career', icon: LuLampDesk },
	{ name: 'Health & Fitness', slug: 'health-and-fitness', icon: LuBike },
	{ name: 'Intellectual', slug: 'intellectual', icon: LuSprout },
	{ name: 'Emotional', slug: 'emotional', icon: LuFlower },
	{ name: 'Character', slug: 'character', icon: LuSmile },
	{ name: 'Life Vision', slug: 'life-vision', icon: LuGoal },
	{ name: 'Spirituality', slug: 'spirituality', icon: LuWaves },
	{ name: 'Relationships', slug: 'relationships', icon: LuHeart }, // Love Relationships, Family, Friends
	{ name: 'Quality of Life', slug: 'quality-of-life', icon: LuSailboat },
	// { name: 'Parenting', slug: 'Parenting', icon: LuCat },
].sort((a, b) => a.name.localeCompare(b.name))

AREAS.push({
	name: 'Interdisciplinary',
	slug: 'interdisciplinary',
	icon: LuPlane,
})
