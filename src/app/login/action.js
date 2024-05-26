'use server';

import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';
import { createClient } from '@/utils/supabase/server';

export async function login(formData) {
	const supabase = createClient();

	// type-casting here for convenience
	// in practice, you should validate your inputs
	const datas = {
		email: formData.get('email'),
		password: formData.get('password'),
	};

	const { error } = await supabase.auth.signInWithPassword(datas);

	if (error) {
		redirect(`/error/${error.message}`);
	}

	revalidatePath('/', 'page');
	redirect('/');
}

export async function signup(formData) {
	const supabase = createClient();

	const datas = {
		email: formData.get('email'),
		password: formData.get('password'),
	};

	const { error } = await supabase.auth.signUp(datas);

	if (error) {
		console.log(error.message);
		redirect(`/error/${error.message}`);
	}

	revalidatePath('/login', 'page');
	redirect('/login');
}

export async function signOut() {
	const supabase = createClient();
	const { error } = await supabase.auth.signOut();

	if (!error) {
		revalidatePath('/', 'page');
		redirect('/');
	}

	console.log(error);
}
